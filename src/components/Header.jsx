// import  { useState } from 'react'
// import { Menu, X, Home, Briefcase, BookOpen, Code } from 'lucide-react'

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   const menuItems = [
//     { name: 'Experience', icon: Briefcase },
//     { name: 'Skills', icon: Code },
//     { name: 'Education', icon: BookOpen },
//     { name: 'Projects', icon: Home }
//   ]

//   return (
//     <header className="py-6">
//       <nav className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//          Ratnesh Patil
//         </h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none text-white">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 md:flex bg-gray-800 md:bg-transparent z-50 md:space-x-8`}>
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <a
//                 href={`#${item.name.toLowerCase()}`}
//                 className="flex items-center py-2 px-4 md:px-0 hover:text-blue-400 transition duration-300"
//                 onClick={toggleMenu}
//               >
//                 <item.icon className="mr-2" size={18} />
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {/* <hr className="h-0.5 my-1 border-none bg-gradient-to-r from-blue-400 to-purple-600" /> */}
//     </header>
//   )
// }

// import { useState } from "react";
// import { Menu, X, Home, Briefcase, BookOpen, Code } from "lucide-react";

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuItems = [
//     { name: "Experience", icon: Briefcase },
//     { name: "Skills", icon: Code },
//     { name: "Education", icon: BookOpen },
//     { name: "Projects", icon: Home },
//   ];

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md bg-black bg-opacity-60">
//       <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
//         {/* Logo / Name */}
//         <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Ratnesh Patil
//         </h1>

//         {/* Menu Items for desktop */}
//         <ul className="hidden md:flex md:items-center md:space-x-8">
//           {menuItems.map((item) => (
//             <li key={item.name}>
              
//               <a
//                 href={`#${item.name.toLowerCase()}`}
//                 className="group inline-flex items-center py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 hover:translate-x-1 transition-all duration-300 ">
//                 <item.icon
//                   className="mr-2 text-blue-400 group-hover:rotate-12 transition-transform duration-300"
//                   size={18}
//                 />
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none text-white"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && (
//         <ul className="md:hidden bg-black bg-opacity-90 flex flex-col items-center space-y-2 py-4">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <a
//                 href={`#${item.name.toLowerCase()}`}
//                 className="flex items-center py-2 px-4 hover:text-blue-400 transition duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <item.icon className="mr-2" size={18} />
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// };


'use client'

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import {

  Menu,
  X,
  Briefcase,
  Code2,
  GraduationCap,
  FolderKanban,
  Award,
  Mail,
  Github,
  Download

} from "lucide-react"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [

    {
      name: "Experience",
      icon: Briefcase
    },

    {
      name: "Skills",
      icon: Code2
    },

    {
      name: "Projects",
      icon: FolderKanban
    },

    {
      name: "Education",
      icon: GraduationCap
    },

    {
      name: "Certifications",
      icon: Award
    },

    {
      name: "Contact",
      icon: Mail
    }

  ]

  return (

    <header
      className="fixed top-0 left-0 w-full z-50"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-5">

        {/* Navbar */}
        <motion.nav

          initial={{
            y: -80,
            opacity: 0
          }}

          animate={{
            y: 0,
            opacity: 1
          }}

          transition={{
            duration: 0.6
          }}

          className="flex items-center justify-between
          px-6 py-4 rounded-2xl
          border border-white/10
          bg-black/40 backdrop-blur-xl
          shadow-2xl"
        >

          {/* Logo */}
          <motion.a
            href="#home"

            whileHover={{
              scale: 1.03
            }}

            className="text-2xl font-black tracking-tight"
          >

            <span className="text-white">
              Ratnesh
            </span>{" "}

            <span className="bg-gradient-to-r from-blue-400 to-purple-500
            bg-clip-text text-transparent">
              Patil
            </span>

          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">

            {menuItems.map((item, index) => (

              <motion.li
                key={index}

                whileHover={{
                  y: -2
                }}

                className="relative group"
              >

                <a
                  href={`#${item.name.toLowerCase()}`}

                  className="flex items-center gap-2
                  text-gray-300 hover:text-white
                  transition duration-300"
                >

                  <item.icon
                    size={17}
                    className="text-blue-400"
                  />

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>

                </a>

                {/* Underline */}
                <span
                  className="absolute -bottom-2 left-0
                  w-0 h-[2px]
                  bg-gradient-to-r from-blue-400 to-purple-500
                  transition-all duration-300
                  group-hover:w-full"
                />

              </motion.li>

            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* GitHub */}
            <motion.a
              href="https://github.com/Ratanesh-Patil"
              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                scale: 1.08
              }}

              whileTap={{
                scale: 0.95
              }}

              className="p-3 rounded-xl
              bg-white/5 border border-white/10
              hover:border-blue-400/30
              transition"
            >

              <Github
                size={20}
                className="text-white"
              />

            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="/Ratnesh-Patil-Resume.pdf"
              download

              whileHover={{
                scale: 1.03
              }}

              whileTap={{
                scale: 0.96
              }}

              className="inline-flex items-center gap-2
              px-5 py-3 rounded-xl
              bg-gradient-to-r from-blue-500 to-purple-600
              text-white font-medium shadow-lg"
            >

              Resume

              <Download size={18} />

            </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}

            className="lg:hidden text-white"
          >

            {isMenuOpen
              ? <X size={26} />
              : <Menu size={26} />
            }

          </button>

        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>

          {isMenuOpen && (

            <motion.div

              initial={{
                opacity: 0,
                y: -20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -20
              }}

              transition={{
                duration: 0.25
              }}

              className="lg:hidden mt-4
              rounded-2xl border border-white/10
              bg-black/60 backdrop-blur-xl
              shadow-2xl overflow-hidden"
            >

              <ul className="flex flex-col p-4">

                {menuItems.map((item, index) => (

                  <motion.li
                    key={index}

                    whileHover={{
                      x: 5
                    }}
                  >

                    <a
                      href={`#${item.name.toLowerCase()}`}

                      onClick={() => setIsMenuOpen(false)}

                      className="flex items-center gap-3
                      px-4 py-4 rounded-xl
                      text-gray-300 hover:text-white
                      hover:bg-white/5 transition"
                    >

                      <item.icon
                        size={18}
                        className="text-blue-400"
                      />

                      <span>
                        {item.name}
                      </span>

                    </a>

                  </motion.li>

                ))}

                {/* Mobile Resume */}
                <motion.a
                  href="/Ratnesh-Patil-Resume.pdf"
                  download

                  whileTap={{
                    scale: 0.96
                  }}

                  className="mt-4 flex items-center
                  justify-center gap-2
                  px-5 py-4 rounded-xl
                  bg-gradient-to-r from-blue-500 to-purple-600
                  text-white font-medium"
                >

                  Resume

                  <Download size={18} />

                </motion.a>

              </ul>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>

  )
}

export default Header