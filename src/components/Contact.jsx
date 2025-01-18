import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_id',
      'template_id',
      {
        from_name: form.name,
        to_name: 'Abdulwahid',
        from_email: form.email,
        to_email: 'abdulwahidhussen750@gmail.com',
        message: form.message,
      },
      'your_public_key'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
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
                <span className="text-white font-medium mb-2">Your Email</span>
                <input
                  type="email"
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