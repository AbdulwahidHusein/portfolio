import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[24px]">Abdulwahid Hussen</h4>
          <p className="text-secondary mt-2">Full Stack Developer & AI Engineer</p>
        </div>
        
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/abdulwahidhussen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AbdulwahidHusein"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:abdulwahidhussen750@gmail.com"
            className="text-secondary hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      
      <p className="text-secondary text-[14px] mt-5">
        © 2024 Abdulwahid Hussen. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer; 