import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <div className='min-h-screen'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical expertise</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='mt-16 flex flex-wrap gap-10 justify-center items-center'
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className='relative group'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='w-[130px] h-[130px] rounded-2xl flex flex-col items-center justify-center gap-4 
                       backdrop-blur-lg bg-white/5 border border-[#915eff]/20 
                       hover:border-[#915eff] transition-all duration-300 
                       hover:shadow-lg hover:shadow-[#915eff]/20 relative overflow-hidden'
              style={{
                background: `radial-gradient(circle at center, ${technology.color}15, transparent)`
              }}
            >
              {/* Animated background gradient */}
              <div 
                className='absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300'
                style={{
                  background: `radial-gradient(circle at center, ${technology.color}, transparent 70%)`
                }}
              />
              
              {/* Glowing ring effect */}
              <div 
                className='absolute inset-0 opacity-0 group-hover:opacity-50'
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, transparent, ${technology.color}, transparent)`,
                  animation: 'spin 4s linear infinite'
                }}
              />
              
              {/* Icon with floating animation */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <technology.icon 
                  className='w-14 h-14 transition-all duration-300 group-hover:scale-110'
                  style={{ color: technology.color }}
                />
              </motion.div>
              
              {/* Name with glow effect */}
              <p 
                className='text-white text-[16px] font-medium opacity-80 group-hover:opacity-100 transition-all duration-300
                         group-hover:text-shadow-glow z-10'
                style={{ 
                  textShadow: `0 0 10px ${technology.color}50`
                }}
              >
                {technology.name}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Tech, "tech"); 