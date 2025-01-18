import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Python, Go, and JavaScript,
        specializing in Generative AI and backend development. My expertise includes building
        scalable systems, implementing AI solutions, and creating innovative applications.
        I've worked on diverse projects from AI-powered platforms to
        high-performance fullstack systems. I'm passionate about using technology to solve
        real-world problems and constantly exploring new ways to innovate.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* Add service cards here if needed */}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about"); 