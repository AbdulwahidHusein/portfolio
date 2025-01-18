import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollMouth = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth spring animation for the mouth opening
  const springConfig = { stiffness: 100, damping: 15 };
  const mouthSpring = useSpring(scrollYProgress, springConfig);

  // Transform scroll progress to mouth properties
  const mouthHeight = useTransform(mouthSpring, [0, 1], [20, 60]);
  const tongueScaleY = useTransform(mouthSpring, [0, 1], [0.5, 1.5]);
  const teethRotation = useTransform(mouthSpring, [0, 1], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-16 h-16 bg-gradient-to-br from-[#915eff] to-[#ff5e91] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#915eff]/50 transition-shadow">
        {/* Mouth Container */}
        <motion.div 
          className="relative w-12 h-8 bg-[#1d1836] rounded-b-full overflow-hidden"
          style={{ height: mouthHeight }}
        >
          {/* Upper Teeth */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-2 flex justify-around"
            style={{ rotate: teethRotation }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-full bg-white rounded-b-sm" />
            ))}
          </motion.div>

          {/* Tongue */}
          <motion.div
            className="absolute bottom-0 left-1/2 w-6 h-4 -ml-3 bg-[#ff5e91] rounded-t-full origin-bottom"
            style={{ scaleY: tongueScaleY }}
          />

          {/* Lower Teeth */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-2 flex justify-around"
            style={{ rotate: teethRotation }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-full bg-white rounded-t-sm" />
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(145,94,255,0.3) 0%, transparent)',
            rotate: useTransform(mouthSpring, [0, 1], [0, 360])
          }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollMouth; 