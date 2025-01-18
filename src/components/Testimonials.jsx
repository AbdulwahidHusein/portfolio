import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='w-[85vw] sm:w-[350px] lg:w-[400px] perspective-1000'
  >
    <motion.div 
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className='bg-gradient-to-br from-[#915eff] to-[#ff5e91] p-[1px] rounded-[20px] shadow-lg hover:shadow-[#915eff]/20 transition-all duration-300'
    >
      <div className='bg-[#1d1836] rounded-[20px] p-4 sm:p-8 min-h-[280px] flex flex-col justify-between backdrop-blur-sm'>
        <div>
          <div className='relative'>
            <p className='text-white font-black text-[48px] leading-none opacity-20 absolute -top-2 -left-2'>"</p>
            <div className='mt-4 relative z-10'>
              <p className='text-white text-[14px] sm:text-[16px] leading-[1.6] tracking-wide'>
                {testimonial}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center gap-4'>
          <div className='w-12 h-12 rounded-full border-2 border-[#915eff] overflow-hidden shadow-lg'>
            <motion.img
              whileHover={{ scale: 1.15 }}
              src={image}
              alt={`feedback-by-${name}`}
              className='w-full h-full object-cover transition-transform duration-300'
            />
          </div>
          <div className='flex-1'>
            <h4 className='text-white font-semibold text-[16px] hover:text-[#915eff] transition-colors duration-300'>
              {name}
            </h4>
            <p className='mt-1 text-[#915eff]/90 text-[12px] leading-tight'>
              {designation} {company && `of ${company}`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <div className='mt-12 bg-[#11071F]/50 rounded-[20px] backdrop-blur-sm'>
      <div className='padding-8 sm:padding-16'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-center text-white mb-10 sm:mb-16`}>
            Testimonials.
          </h2>
        </motion.div>

        <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 px-4 sm:px-10 max-w-7xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={testimonial.name} 
              index={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Testimonials, "testimonials"); 