import {
  SiDjango,
  SiFastapi,
  SiGo,
  SiFlask,
  SiNextdotjs,
  SiReact,
  SiOpenai,
  SiZapier,
  SiAmazon,
} from 'react-icons/si';

import { FaRobot } from 'react-icons/fa';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const testimonials = [
  {
    testimonial: "Abdulwahid is an exceptionally creative and intelligent developer. He quickly grasps complex concepts, adapts effortlessly, and implements innovative solutions with precision, all while delivering on time. During his time at our company, he achieved remarkable milestones that made a significant impact. Truly outstanding!",
    name: "Jakob Wredstrom",
    designation: "Founder and CEO",
    company: "Amplitude Ventures",
    image: "images/jakob.jpg",
  },
  {
    testimonial: "Abdulwahid is a genuine innovator with a remarkable ability to communicate effectively and an exceptional personality. His deep enthusiasm for cutting-edge technology drives him to solve challenging problems and inspire innovation. His contributions to CSEC-ASTU, whether in development projects or through his incredible lectures and mentorships, have been invaluable.",
    name: "Kiya Kebe",
    designation: "President",
    company: "CSEC-ASTU",
    image: "images/kiya.jpg",
  },
  {
    testimonial: "Working with Abdulwahid has been a fantastic experience. He is highly innovative, collaborates efficiently, and demonstrates an exceptional understanding of projects. His ability to work seamlessly with teams and deliver high-quality results is truly commendable.",
    name: "Fasil Hawultie",
    designation: "Full-stack Developer",
    company: "",
    image: "images/fasil.jpg",
  },
  {
    testimonial: "Abdulwahid is a creative and highly dedicated individual with exceptional technical and communication skills. As one of the top performers during our A2SV sessions, he consistently excelled, delivering innovative solutions and leading a team of developers to achieve significant results. His work ethic and leadership are exemplary.",
    name: "Yourdanos Wuletaw",
    designation: "Head of Education",
    company: "A2SV",
    image: "images/yordanos.jpg",
  },
];

export const experiences = [
  {
    title: "Generative AI Engineer",
    company_name: "Amplitude Ventures",
    icon: FaRobot,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Engineered and deployed generative AI agents using large language models, enabling dynamic and context-aware solutions for content creation.",
      "Designed and optimized prompts and workflows to enhance AI performance and relevance, achieving measurable improvements in response accuracy and user satisfaction.",
      "Implemented Retrieval-Augmented Generation (RAG) techniques by integrating AI models with custom knowledge bases.",
      "Reduced response time by 10% through optimization and efficient knowledge base integration.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Eskalate",
    icon: SiGo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2024",
    points: [
      "Implemented scalable APIs in Go and adopted clean architecture, improving data processing speed by 20%.",
      "Streamlined API integrations with frontend teams and product managers, resulting in 30% increase in functionality.",
      "Integrated secure authentication protocols, reducing security incidents by 30%.",
      "Conducted code reviews and mentored 4 junior developers, improving team efficiency by 25%.",
      "Analyzed system performance metrics and enhanced response times by 15%.",
    ],
  },
  
];

export const projects = [
  {
    name: "QuizMe",
    description: "A generative AI-powered learning platform that creates adaptive quizzes and incorporates gamified elements. The platform increased student participation by 25% and enhanced the overall educational experience through personalized learning paths.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "TelleMart",
    description: "A multivendor marketplace developed as a Telegram mini app, featuring automated product listing synchronization from seller channels and groups. The platform includes a user-friendly interface for browsing products and managing shopping carts.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "telegram-api",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
];

export const technologies = [
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20"
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688"
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "#000000"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000"
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB"
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#412991"
  },
  {
    name: "Zapier",
    icon: SiZapier,
    color: "#FF4A00"
  },
  {
    name: "n8n",
    icon: FaRobot,
    color: "#FF6B6B"
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "#FF9900"
  }
]; 