import { motion } from 'framer-motion';
import { styles } from '../styles';
import me from '../assets/me.png';
import { FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiGmail } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#11071F]">
      {/* Dynamic Background with Code Rain Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#915eff]/20 via-[#11071F] to-black" />
        {/* Matrix-like Code Rain */}
        <div className="relative w-full h-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-[1px] h-20 bg-gradient-to-b from-[#915eff] to-transparent"
              style={{
                left: `${(index * 100) / 30}%`,
                top: -80,
              }}
              animate={{
                y: ['0vh', '100vh']
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Glowing Circles Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={`circle-${index}`}
              className="absolute rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(145,94,255,0.15) 0%, rgba(145,94,255,0) 70%)',
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Profile Image - Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[80px] sm:top-24 right-6 sm:right-12 z-[10]"
      >
        <div className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]">
          <motion.div
            className="absolute inset-0 rounded-full bg-[#915eff]/10 backdrop-blur-md"
            animate={{
              boxShadow: [
                '0 0 25px rgba(145,94,255,0.2)',
                '0 0 45px rgba(145,94,255,0.1)',
                '0 0 25px rgba(145,94,255,0.2)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img 
            src={me} 
            alt="Abdulwahid"
            className="absolute inset-0 w-full h-full object-cover rounded-full ring-2 ring-[#915eff]/30"
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto h-full">
        <div className={`${styles.paddingX} absolute top-[120px] flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#915eff]"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 0 rgba(145,94,255,0.4)',
                  '0 0 0 10px rgba(145,94,255,0)',
                  '0 0 0 0 rgba(145,94,255,0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm{" "}
                  <motion.span 
                    className="text-[#915eff] inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Abdulwahid
                  </motion.span>
                </h1>

                <div className="mt-5">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative h-[160px] sm:h-[120px]"
                  >
                    <motion.div
                      className="absolute w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h2 className={`${styles.heroSubText} text-white-100`}>
                        Full Stack Developer & Generative AI Engineer
                      </h2>
                      <p className="mt-2 text-secondary text-[20px] max-w-3xl leading-[30px]">
                        Transforming Ideas into Revolutionary Solutions
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.p 
                  className="mt-4 text-secondary text-[18px] max-w-3xl leading-[28px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Mastering the art of Full Stack Development with expertise in 
                  <span className="text-[#915eff]"> Generative AI</span>,
                  <span className="text-[#915eff]"> Cloud Architecture</span>, and
                  <span className="text-[#915eff]"> Intelligent Automation</span>. 
                  Crafting innovative solutions that bridge the gap between cutting-edge technology 
                  and real-world business challenges.
                </motion.p>

                {/* Tech Stack Pills */}
                <motion.div 
                  className="mt-10 w-full sm:w-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex flex-wrap gap-2 w-full max-w-[90vw] sm:max-w-none">
                    {[
                      { name: "Python", color: "blue" },
                      { name: "GenAI", color: "green" },
                      { name: "Automation", color: "pink" },
                      { name: "React", color: "orange" },
                      { name: "AWS", color: "purple" }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-[#915eff]/30 backdrop-blur-sm hover:bg-[#915eff]/10 transition-colors text-[13px] sm:text-base flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        <span className={`${tech.color}-text-gradient font-semibold`}>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links - Left corner on desktop, bottom on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed sm:absolute bottom-0 sm:top-32 left-0 sm:left-12 z-[25] w-full sm:w-auto"
      >
        <div className="flex flex-row sm:flex-col gap-3 justify-center sm:justify-start items-center sm:items-start bg-[#11071F]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none py-3 sm:py-0 px-2 sm:px-0">
          {[
            { 
              icon: SiLeetcode, 
              href: "https://leetcode.com/abdulwahidhussen",
              label: "LeetCode",
              gradient: "from-yellow-500 to-orange-500"
            },
            { 
              icon: SiCodeforces,
              href: "https://codeforces.com/profile/Alien11d",
              label: "CodeForces",
              gradient: "from-red-500 to-pink-500"
            },
            { 
              icon: FaGithub,
              href: "https://github.com/AbdulwahidHusein",
              label: "GitHub",
              gradient: "from-gray-600 to-gray-700"
            },
            { 
              icon: FaLinkedin,
              href: "https://linkedin.com/in/abdulwahidhussen",
              label: "LinkedIn",
              gradient: "from-blue-500 to-blue-600"
            },
            { 
              icon: SiGmail,
              href: "mailto:abdulwahidhussen750.email@gmail.com",
              label: "Email",
              gradient: "from-red-400 to-red-500"
            },
            { 
              icon: FaPhone,
              href: "tel:+251991290496",
              label: "Call",
              gradient: "from-green-500 to-emerald-500"
            },
          ].map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r ${link.gradient} 
                opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer shadow-md
                hover:shadow-lg hover:shadow-[#915eff]/20 flex-shrink-0`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <link.icon className="text-white text-lg" />
              <span className="text-white text-sm font-medium hidden sm:group-hover:block sm:w-0 sm:group-hover:w-auto transition-all duration-300">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Adjust Scroll Indicator position */}
      
    </section>
  );
}

export default Hero; 