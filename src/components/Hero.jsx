
// import { Linkedin, Github, Mail, Phone } from 'lucide-react'
// import profile from '../images/Ratnesh profile.jpg' 

// export const Hero = () => {
//   return (
// <section className="flex flex-col md:flex-row items-center justify-center gap-60 text-center md:text-left py-12 space-y-6 md:space-y-0 ">
//   {/* Left Section - Info */}
//   <div className="md:w-auto ">
//     <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//     Ratnesh Patil
//     </h1>
//     <p className="text-xl text-gray-300 mb-4"> Full-Stack Software Developer</p>
//     <div className="flex justify-center md:justify-start space-x-4">
//       {[
//         { icon: Mail, href: "mailto:ratnesh.k.patil@gmail.com" },
//         { icon: Phone, href: "tel:+917350402226" },
//         { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-patil-307013217/" },
//         { icon: Github, href: "https://github.com/Ratanesh-Patil" }
//       ].map((item, index) => (
//         <a 
//           key={index}
//           href={item.href} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="text-gray-300 hover:text-blue-400 transition duration-300"
//         >
//           <item.icon size={26} />
//         </a>
//       ))}
//     </div>
//   </div>

//   {/* Right Section - Profile Image */}
//   <div className="md:w-auto">
//     <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-400">
//       <img src={profile} alt="Vidhi Mistry" className="w-full h-full object-cover" />
//     </div>
//   </div>
// </section>


  
//   )
// }

// import { Linkedin, Github, Mail, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';
// import profile from '../images/Ratnesh profile.jpg';

// export const Hero = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center md:text-left py-16 px-6 md:px-12">
      
//       {/* Left Section - Info */}
//       <motion.div
//         className="md:w-1/2"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
        
//         <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Ratnesh Patil
//         </h1>
//         <motion.p
//           className="text-xl md:text-2xl text-gray-300 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Full-Stack Software Developer
//         </motion.p>

//         <div className="flex justify-center md:justify-start space-x-5 mb-6">
//           {[
//             { icon: Mail, href: "mailto:ratnesh.k.patil@gmail.com", label: "Email" },
//             { icon: Phone, href: "tel:+917350402226", label: "Phone" },
//             { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-patil-307013217/", label: "LinkedIn" },
//             { icon: Github, href: "https://github.com/Ratanesh-Patil", label: "GitHub" }
//           ].map((item, index) => (
//             <motion.a
//               key={index}
//               href={item.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={item.label}
//               className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <item.icon size={28} />
//             </motion.a>
//           ))}
//         </div>

//         <motion.a
//           href="#projects"
//           className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//         >
//           View Projects
//         </motion.a>
//       </motion.div>

//       {/* Right Section - Profile Image */}
//       <motion.div
//         className="md:w-1/2 flex justify-center md:justify-end"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
        
//       >
//         <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl hover:scale-105 transition-transform duration-500">
//           <img
          
//             src={profile}
//             alt="Ratnesh Patil"
//             className="w-full h-full object-cover"
//           />
//           {/* Optional: Gradient glow */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-10 animate-pulse"></div>
//         </div>
//       </motion.div>

//       {/* Optional: Background Shapes */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-10 rounded-full filter blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-10 rounded-full filter blur-3xl -z-10"></div>
//     </section>
//   );
// };


import {
  Linkedin,
  Github,
  Mail,
  Phone,
  // Download
} from "lucide-react";

import { motion } from "framer-motion";
import profile from "../images/Ratnesh profile.jpg";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:ratnesh.k.patil@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+917350402226",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ratnesh-patil-307013217/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Ratanesh-Patil",
      label: "GitHub"
    }
  ];

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "Microservices",
    "PostgreSQL",
    "RabbitMQ"
  ];

  // const stats = [
  //   "2+ Years Experience",
  //   "50+ APIs Built",
  //   "ERP Systems",
  //   "Finance Modules"
  // ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-16 overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-30
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-20"></div>

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse -z-20"></div>

      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full 
          border border-green-500/30 bg-green-500/10 text-green-400 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for Opportunities
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-5">
          <span className="text-white">Ratnesh</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Patil
          </span>
        </h1>

        {/* Subtitle */}
        {/* <motion.p
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Backend-focused Full Stack Developer specializing in{" "}
          <span className="text-blue-400 font-semibold">
            Spring Boot
          </span>
          ,{" "}
          <span className="text-purple-400 font-semibold">
            Microservices
          </span>
          , and scalable ERP applications.
        </motion.p> */}

        <div className="text-xl md:text-3xl font-medium mt-4">
  <span className="text-gray-300">
    Specialized in{" "}
  </span>

  <TypeAnimation
    sequence={[
      "Spring Boot",
      2000,
      "Microservices",
      2000,
      "ERP Systems",
      2000,
      "Backend Architecture",
      2000,
      "React & React Native",
      2000,
      "Web & Mobile Development",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-blue-400 font-bold"
  />
</div>

        {/* Stats */}
        {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 
              backdrop-blur-sm text-gray-300 text-sm"
            >
              {item}
            </motion.div>
          ))}
        </div> */}

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 
              border border-white/10 text-sm text-gray-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-600 
            text-white font-semibold shadow-lg"
          >
            View Projects
          </motion.a>

          {/* <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-7 py-3 rounded-xl 
            border border-white/20 bg-white/5 backdrop-blur-md 
            text-white hover:bg-white/10 transition"
          >
            <Download size={18} />
            Resume
          </motion.a> */}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-10">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{
                scale: 1.15,
                y: -4
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 
              backdrop-blur-md text-gray-300 hover:text-white 
              hover:border-blue-400 hover:bg-blue-500/10 
              transition-all duration-300"
            >
              <item.icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0]
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 0.8 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Image Container */}
        <div
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full 
          overflow-hidden border-4 border-blue-400/40 
          shadow-[0_0_60px_rgba(59,130,246,0.35)]"
        >

          <img
            src={profile}
            alt="Ratnesh Patil"
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div
            className="absolute inset-0 rounded-full 
            bg-gradient-to-tr from-blue-500/10 to-purple-500/10"
          />
        </div>
      </motion.div>
    </section>
  );
};