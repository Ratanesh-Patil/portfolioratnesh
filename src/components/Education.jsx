// import { GraduationCap, Calendar } from "lucide-react";

// export const Education = () => {
//   const education = [
//     {
//       degree: "Post Graduate Diploma In Advanced Computing (PG-DAC)",
//       institution: "Institute for Advanced Computing and Software Development, Pune",
//       period: "Sep 2022 – Mar 2023",
//     },
//     {
//       degree: "Bachelor of Engineering",
//       institution: "Savitribai phule pune university, Pune",
//       period: "Sep 2016 – Aug 2019",
//     },
//   ];

//   return (
//     <section id="education" className="py-20">
//       <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//         Education
//       </h2>
//       <div className="space-y-8">
//         {education.map((edu, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
//           >
//             <h3 className="text-xl font-semibold mb-2 text-blue-400 flex items-center">
//               <GraduationCap size={24} className="mr-2" />
//               {edu.degree}
//             </h3>
//             <p className="text-gray-300 mb-2">{edu.institution}</p>
//             <p className="text-sm text-gray-400 flex items-center">
//               <Calendar size={18} className="mr-2" />
//               {edu.period}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


'use client'

import {
  GraduationCap,
  Calendar,
  BookOpen,
  Sparkles
} from "lucide-react"

import { motion } from "framer-motion"

export const Education = () => {

  const education = [
    {
      degree:
        "Post Graduate Diploma In Advanced Computing (PG-DAC)",

      institution:
        "Institute for Advanced Computing and Software Development, Pune",

      period:
        "Sep 2022 – Mar 2023",

      description:
        "Focused on full stack development, data structures, operating systems, databases, Java enterprise development, and software engineering concepts.",

      technologies: [
        "Java",
        "Spring",
        "React",
        "DSA",
        "SQL",
        "Operating Systems"
      ]
    },

    {
      degree:
        "Bachelor of Engineering",

      institution:
        "Savitribai Phule Pune University, Pune",

      period:
        "Sep 2016 – Aug 2019",

      description:
        "Built strong engineering fundamentals, analytical problem-solving skills.",

      technologies: [

      ]
    }
  ]

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 
      bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
        border border-purple-500/20 bg-purple-500/10 
        text-purple-400 text-sm mb-6">

          <Sparkles size={16} />
          Academic Journey

        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Education</span>{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            & Learning
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Strong academic foundation combined with hands-on
          enterprise software development experience.
        </p>

      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px]
        bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

        {education.map((edu, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center mb-20
            ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
            `}
          >

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 
            transform md:-translate-x-1/2 
            w-5 h-5 rounded-full bg-purple-500 
            border-4 border-[#0f172a] shadow-lg z-10"></div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="ml-14 md:ml-0 md:w-1/2
              bg-white/5 border border-white/10
              backdrop-blur-xl rounded-3xl p-8 shadow-2xl
              transition-all duration-300
              hover:border-purple-400/30"
            >

              {/* Degree */}
              <div className="flex items-start gap-4 mb-4">

                <div className="p-3 rounded-2xl
                bg-gradient-to-r from-blue-500/20 to-purple-500/20
                border border-white/10">

                  <GraduationCap
                    size={28}
                    className="text-purple-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center text-blue-400 mt-2">
                    <BookOpen size={18} className="mr-2" />
                    <span>{edu.institution}</span>
                  </div>

                </div>

              </div>

              {/* Period */}
              <div className="flex items-center text-gray-400 mb-6 text-sm">

                <Calendar size={16} className="mr-2" />

                <span>{edu.period}</span>

              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">

                {edu.technologies.map((tech, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-sm
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10
                    border border-white/10 text-gray-300"
                  >
                    {tech}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>
    </section>
  )
}

export default Education