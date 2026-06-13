// import { Award } from "lucide-react";
// import {  motion } from 'framer-motion'
// import React from "react";

// function Certification() {

//     const certifications = [
//         "Completed Java and SQL certification from HackerRank.",
//         "Completed the ReactJS and GitHub certification from Great Learning.",
//         "The best outgoing sports student at SGI for 2015-16.",
//         "Active participation in ENSEMBLE 2K17-18.",
//       ];

//   return (
//     <section id="projects" className="py-20">

//       <div className="grid md:grid-cols-1 gap-8">
//         <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
//           <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
//             <Award size={24} className="mr-2" />
//             Certifications and Awards
//           </h3>
//           <ul className="space-y-2">
//             {certifications.map((cert, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
//                 <span className="text-gray-300">{cert}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certification;

// import { Award } from "lucide-react";
// import { motion } from "framer-motion";
// import wellsFargoImg from "../images/Wells-Fargo.png";
// import greatLearingGitHub from "../images/Great-Learing-GitHub.png";
// import greatLearingReact from "../images/Great-Learing-React.png";
// import javaHackerRank from "../images/java-hackerrank.png";
// import sqlHackerRank from "../images/SQL-hackerRank.png";
// import frontEnd from "../images/Skyscanner-Front-End.png";
// import nodeJs from "../images/Nodejs-Certificate.png";




// // Sample image URLs — replace with your own
// const certifications = [
//     {
//     title: "Software Engineer certification from Wells Fargo",
//     image: wellsFargoImg,
//   },
//   {
//     title: "SQL certification from HackerRank",
//     image: sqlHackerRank,
//   },
 
//   {
//     title: "ReactJS certification from Great Learning",
//     image: greatLearingReact,
//   },
//    {
//     title: "Java certification from HackerRank",
//     image: javaHackerRank,
//   },
//   {
//     title: "GitHub certification from Great Learning",
//     image: greatLearingGitHub,
//   },
//   {
//     title: "NodeJs certification from Scaler",
//     image: nodeJs,
//   },
//   {
//     title: "Front-End Software Engineer certification from Skyscanner",
//     image: frontEnd,
//   },

 
// ];

// function Certification() {
//   return (
//     <section id="certifications" className="py-20">
//       <div className="max-w-full mx-auto">
//       <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Certifications and Awards
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
//               whileHover={{ scale: 1.1 }}
//             >
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-64 object-contain mb-2 rounded-md"
//               />
//               <p className="text-gray-200 text-sm font-medium">{cert.title}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certification;
'use client'

import { motion } from "framer-motion"

import {
  Award,
  ExternalLink,
  Sparkles,
  ShieldCheck
} from "lucide-react"

import wellsFargoImg from "../images/Wells-Fargo.png"
import greatLearingGitHub from "../images/Great-Learing-GitHub.png"
import greatLearingReact from "../images/Great-Learing-React.png"
import javaHackerRank from "../images/java-hackerrank.png"
import sqlHackerRank from "../images/SQL-hackerRank.png"
import frontEnd from "../images/Skyscanner-Front-End.png"
import nodeJs from "../images/Nodejs-Certificate.png"

const certifications = [

  {
    title:
      "Software Engineering Virtual Experience",

    issuer:
      "Wells Fargo",

    image:
      wellsFargoImg,

    skills: [
      "Software Engineering",
      "Enterprise Systems"
    ],

    featured: true
  },

  {
    title:
      "Java Certification",

    issuer:
      "HackerRank",

    image:
      javaHackerRank,

    skills: [
      "Java",
      "Problem Solving"
    ]
  },

  {
    title:
      "SQL Certification",

    issuer:
      "HackerRank",

    image:
      sqlHackerRank,

    skills: [
      "SQL",
      "Database Queries"
    ]
  },

  {
    title:
      "ReactJS Certification",

    issuer:
      "Great Learning",

    image:
      greatLearingReact,

    skills: [
      "ReactJS",
      "Frontend Development"
    ]
  },

  {
    title:
      "GitHub Certification",

    issuer:
      "Great Learning",

    image:
      greatLearingGitHub,

    skills: [
      "GitHub",
      "Version Control"
    ]
  },

  {
    title:
      "NodeJS Certification",

    issuer:
      "Scaler",

    image:
      nodeJs,

    skills: [
      "NodeJS",
      "Backend Development"
    ]
  },

  {
    title:
      "Front-End Software Engineering",

    issuer:
      "Skyscanner",

    image:
      frontEnd,

    skills: [
      "Frontend",
      "UI Engineering"
    ]
  }

]

function Certification() {

  return (

    <section
      id="certifications"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 
      bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}

        className="text-center mb-16"
      >

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
        border border-yellow-500/20 bg-yellow-500/10 
        text-yellow-400 text-sm mb-6">

          <Sparkles size={16} />
          Professional Growth

        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Certifications</span>{" "}

          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 
          bg-clip-text text-transparent">
            & Achievements
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Continuous learning through certifications,
          technical assessments, and industry programs.
        </p>

      </motion.div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {certifications.map((cert, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -8
            }}

            className="group
            bg-white/5 border border-white/10
            backdrop-blur-xl rounded-3xl
            overflow-hidden shadow-2xl
            hover:border-yellow-400/20
            transition-all duration-300"
          >

            {/* Certificate Preview */}
            <div className="relative overflow-hidden bg-white p-4">

              <img
                src={cert.image}
                alt={cert.title}

                className="w-full h-48 object-contain
                transition-transform duration-700
                group-hover:scale-105"
              />

              {/* Featured Badge */}
              {cert.featured && (

                <div className="absolute top-4 left-4">

                  <div className="px-3 py-1 rounded-full
                  bg-yellow-500/10 border border-yellow-500/20
                  text-yellow-500 text-xs font-semibold
                  backdrop-blur-md">

                    FEATURED

                  </div>

                </div>

              )}

            </div>

            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 mb-5">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                <p className="text-gray-400 text-sm">
                  Issued by {cert.issuer}
                </p>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">

                {cert.skills.map((skill, i) => (

                  <div
                    key={i}

                    className="px-3 py-1 rounded-full text-xs
                    bg-gradient-to-r from-yellow-500/10 to-orange-500/10
                    border border-white/10 text-gray-300"
                  >
                    {skill}
                  </div>

                ))}

              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-yellow-400">

                  <Award size={18} />

                  <span className="text-sm font-medium">
                    Certified
                  </span>

                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  className="flex items-center gap-2
                  text-blue-400 text-sm font-medium"
                >

                  View

                  <ExternalLink size={16} />

                </motion.button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default Certification