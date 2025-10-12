
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

import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from '../images/Ratnesh profile.jpg';

export const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center md:text-left py-16 px-6 md:px-12">
      
      {/* Left Section - Info */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Ratnesh Patil
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Software Developer
        </motion.p>

        <div className="flex justify-center md:justify-start space-x-5 mb-6">
          {[
            { icon: Mail, href: "mailto:ratnesh.k.patil@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+917350402226", label: "Phone" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-patil-307013217/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Ratanesh-Patil", label: "GitHub" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <item.icon size={28} />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          View Projects
        </motion.a>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl hover:scale-105 transition-transform duration-500">
          <img
            src={profile}
            alt="Ratnesh Patil"
            className="w-full h-full object-cover"
          />
          {/* Optional: Gradient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-10 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Optional: Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};
