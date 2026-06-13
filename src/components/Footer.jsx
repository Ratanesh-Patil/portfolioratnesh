// import { Heart } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-8 text-center">
//       <p className="text-gray-400 flex items-center justify-center">
//         Made with <Heart size={18} className="mx-1 text-red-500" /> by Ratnesh
//         Patil &copy; 2025
//       </p>
//     </footer>
//   );
// };

'use client'

import { motion } from "framer-motion"

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp
} from "lucide-react"

export const Footer = () => {

  const navItems = [
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Contact"
  ]

  return (

    <footer className="relative mt-24 border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 
      bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Branding */}
          <div>

            <motion.h3
              whileHover={{ scale: 1.02 }}

              className="text-3xl font-black mb-4"
            >

              <span className="text-white">
                Ratnesh
              </span>{" "}

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 
              bg-clip-text text-transparent">
                Patil
              </span>

            </motion.h3>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Full-Stack Software Developer focused on
              scalable backend systems, enterprise applications,
              microservices architecture, and modern frontend engineering.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-white font-semibold mb-5">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              {navItems.map((item, index) => (

                <motion.a
                  key={index}

                  href={`#${item.toLowerCase()}`}

                  whileHover={{
                    x: 5
                  }}

                  className="text-gray-400 hover:text-blue-400
                  transition"
                >
                  {item}
                </motion.a>

              ))}

            </div>

          </div>

          {/* Socials */}
          <div>

            <h4 className="text-white font-semibold mb-5">
              Connect
            </h4>

            <div className="flex gap-4 mb-6">

              {/* GitHub */}
              <motion.a
                href="https://github.com/Ratanesh-Patil"
                target="_blank"
                rel="noopener noreferrer"

                whileHover={{
                  y: -5,
                  scale: 1.05
                }}

                className="p-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition"
              >

                <Github
                  size={22}
                  className="text-white"
                />

              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/ratnesh-patil-307013217/"
                target="_blank"
                rel="noopener noreferrer"

                whileHover={{
                  y: -5,
                  scale: 1.05
                }}

                className="p-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition"
              >

                <Linkedin
                  size={22}
                  className="text-blue-400"
                />

              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:ratnesh.k.patil@gmail.com"

                whileHover={{
                  y: -5,
                  scale: 1.05
                }}

                className="p-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition"
              >

                <Mail
                  size={22}
                  className="text-purple-400"
                />

              </motion.a>

            </div>

            <p className="text-gray-400 text-sm">
              Pune, Maharashtra, India
            </p>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10
        flex flex-col md:flex-row items-center
        justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">

            © 2026 Ratnesh Patil.

            <span className="ml-2">
              Building scalable enterprise applications.
            </span>

          </p>

          {/* Scroll To Top */}
          <motion.a
            href="#home"

            whileHover={{
              y: -4
            }}

            whileTap={{
              scale: 0.95
            }}

            className="p-3 rounded-xl
            bg-gradient-to-r from-blue-500 to-purple-600
            text-white shadow-lg"
          >

            <ArrowUp size={20} />

          </motion.a>

        </div>

      </div>

    </footer>

  )
}

export default Footer