import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.3 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    className="fixed bottom-8 right-8 z-50"
  >
    <div className={`${
      type === 'success' 
        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
        : 'bg-gradient-to-r from-red-500 to-pink-500'
    } rounded-lg shadow-lg p-4 flex items-center space-x-3 min-w-[300px]`}>
      <div className="flex-shrink-0">
        {type === 'success' ? (
          <FiCheckCircle className="w-6 h-6 text-white" />
        ) : (
          <FiAlertCircle className="w-6 h-6 text-white" />
        )}
      </div>
      <p className="text-white flex-1">{message}</p>
      <button 
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
      >
        ×
      </button>
    </div>
  </motion.div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000); // Auto hide after 5 seconds
  };

  const sendTelegramMessage = async (message) => {
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_USER_ID = import.meta.env.VITE_TELEGRAM_USER_ID;
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_USER_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send Telegram message');
      }
      
      return true;
    } catch (error) {
      console.error('Telegram sending error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedMessage = `
<b>New Contact Form Submission</b>

<b>Name:</b> ${form.name}
<b>Email:</b> ${form.email}
<b>Message:</b> ${form.message}

<i>Timestamp: ${new Date().toISOString()}</i>`;

      const success = await sendTelegramMessage(formattedMessage);

      if (success) {
        setLoading(false);
        showToast("Thank you for reaching out! I'll get back to you as soon as possible. 🚀");
        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Message sending failed');
      }
    } catch (error) {
      setLoading(false);
      console.error('Contact form error:', error);
      showToast("Oops! Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>
      
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-1 bg-gradient-to-br from-[#1d1836] to-[#11071F] p-8 rounded-2xl'
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#915eff]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-[#ff5e91]/10 rounded-full blur-2xl" />

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col gap-4 min-w-[300px]">
              <div className="flex items-center gap-4 bg-[#1d1836]/50 p-4 rounded-xl">
                <FiMail className="text-[#915eff] text-2xl" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-secondary text-sm">abdulwahidhussen750@gmail.com</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#915eff] to-[#ff5e91] p-[1px] rounded-lg">
                <div className="bg-[#1d1836] px-4 py-3 rounded-lg">
                  <p className="text-white text-sm leading-relaxed">
                    I'm always interested in hearing about new projects and opportunities.
                    Feel free to reach out if you'd like to connect!
                  </p>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-6 min-w-[300px]"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-[#1d1836]/50 py-3 px-6 text-white rounded-lg border border-[#915eff]/20 
                           focus:border-[#915eff] outline-none transition-colors duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">How can I contact you back? </span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-[#1d1836]/50 py-3 px-6 text-white rounded-lg border border-[#915eff]/20 
                           focus:border-[#915eff] outline-none transition-colors duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-[#1d1836]/50 py-3 px-6 text-white rounded-lg border border-[#915eff]/20 
                           focus:border-[#915eff] outline-none transition-colors duration-200 resize-none"
                />
              </label>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#915eff] to-[#ff5e91] py-3 px-8 outline-none w-fit 
                         text-white font-bold shadow-md shadow-primary rounded-xl flex items-center gap-2
                         hover:shadow-lg hover:shadow-[#915eff]/20 transition-all duration-300"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message
                    <FiSend className="text-lg" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 