// 'use client'
// import { Calendar, Building } from 'lucide-react'

// export const Experience = () => {
//   const experiences = [
//     {
//       title: "Full-Stack Software Developer",
//       company: "PurpleGrad, Pune",
//       period: "Sept, 2023 – Present",
//       responsibilities: [
//         "Developed Full-Stack Applications using Java (backend) and React (frontend).",
//         "Managed PostgreSQL databases, including schema design and query optimization.",
//         "Created RESTful APIs for efficient client-server communication.",
//         "Engaged in Agile practices and collaborated with cross-functional teams.",
//         "Implemented security measures including role-based access control and data encryption."
//       ],
//       achievements: [
//         "Developed and deployed an ERP system, improving operational efficiency by 30%.",
//         "Led the creation of a Hospital Management System, enhancing patient care and increasing operational efficiency by 20%."
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 ">
//       <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ">
//         Experience
//       </h2>
//       <div className="space-y-12">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl "
//           >
//             <h3 className="text-xl font-semibold mb-2 text-blue-400">{exp.title}</h3>
//             <p className="text-gray-300 mb-2 flex items-center">
//               <Building size={18} className="mr-2" />
//               {exp.company}
//             </p>
//             <p className="text-sm text-gray-400 mb-4 flex items-center">
//               <Calendar size={18} className="mr-2" />
//               {exp.period}
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//               {exp.responsibilities.map((resp, idx) => (
//                 <li key={idx} className="text-sm text-gray-300">{resp}</li>
//               ))}
//             </ul>
//             {exp.achievements && (
//               <>
//                 <h4 className="text-lg font-bold mt-4 mb-2 text-blue-400">Key Achievements:</h4>
//                 <ul className="list-disc list-inside space-y-2">
//                   {exp.achievements.map((ach, idx) => (
//                     <li key={idx} className="text-sm text-gray-300">{ach}</li>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
// 'use client'
// import { Calendar, Building, CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'

// export const Experience = () => {
//   const experience = {
//     title: "Full-Stack Software Developer",
//     company: "PurpleGrad, Pune",
//     period: "Sept, 2023 – Present",
//     responsibilities: [
//       "Developed Full-Stack Applications using Java (backend) and React (frontend).",
//       "Managed PostgreSQL databases, including schema design and query optimization.",
//       "Created RESTful APIs for efficient client-server communication.",
//       "Engaged in Agile practices and collaborated with cross-functional teams.",
//       "Implemented security measures including role-based access control and data encryption."
//     ],
//     achievements: [
//       "Developed and deployed an ERP system, improving operational efficiency by 30%.",
//       "Led the creation of a Hospital Management System, enhancing patient care and increasing operational efficiency by 20%."
//     ]
//   };

//   return (
//     <section id="experience" className="py-20">
//       <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//         Experience
//       </h2>

//       <motion.div
//         className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h3 className="text-2xl font-semibold mb-2 text-blue-400">{experience.title}</h3>
//         <p className="text-gray-300 mb-2 flex items-center">
//           <Building size={18} className="mr-2" />
//           {experience.company}
//         </p>
//         <p className="text-sm text-gray-400 mb-6 flex items-center">
//           <Calendar size={18} className="mr-2" />
//           {experience.period}
//         </p>

//         <h4 className="text-lg font-semibold text-gray-300 mb-2">Responsibilities:</h4>
//         <ul className="list-none space-y-2 mb-4">
//           {experience.responsibilities.map((resp, idx) => (
//             <li key={idx} className="flex items-start text-gray-300">
//               <CheckCircle size={16} className="mr-2 mt-1 text-green-400 flex-shrink-0" />
//               {resp}
//             </li>
//           ))}
//         </ul>

//         <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Achievements:</h4>
//         <ul className="list-none space-y-2">
//           {experience.achievements.map((ach, idx) => (
//             <li key={idx} className="flex items-start text-gray-300">
//               <CheckCircle size={16} className="mr-2 mt-1 text-yellow-400 flex-shrink-0" />
//               {ach}
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </section>
//   )
// }

// export default Experience;


'use client'

import {
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

import { motion } from 'framer-motion'

export const Experience = () => {

  const experiences = [
    {
      title: "Full Stack Software Developer (Java & React)",
      company: "PurpleGrad, Pune",
      period: "March 2025 – Present",
      tech: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "Docker"
      ],
      responsibilities: [
        "Developed scalable ERP & CRM applications using Spring Boot microservices, React, and PostgreSQL.",
        "Optimized secure REST APIs with pagination and filtering, improving API response time by 40%.",
        "Implemented JWT authentication and RBAC authorization for enterprise applications.",
        "Integrated Google Meet, Zoom APIs, and Google Calendar for workflow automation.",
        "Built asynchronous notification systems using RabbitMQ and Redis caching.",
        "Developed reusable React dashboards and modular UI components.",
        "Used AI-assisted development tools like ChatGPT, Claude AI, and GitHub Copilot."
      ]
    },

    {
      title: "Full Stack Software Developer",
      company: "PurpleGrad, Pune",
      period: "September 2023 – February 2025",
      tech: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "GitHub Actions",
        "Docker",
        "DigitalOcean"
      ],
      responsibilities: [
        "Developed 50+ RESTful APIs for ERP and healthcare systems.",
        "Automated GST workflows including e-invoicing and e-way bill generation.",
        "Built dynamic PDF reporting systems using iText7.",
        "Implemented workflow reminders, scheduling, and calendar automation.",
        "Built CI/CD pipelines reducing deployment time from hours to minutes.",
        "Optimized PostgreSQL queries and backend reporting performance.",
        "Applied SOLID principles and clean architecture practices."
      ]
    }
  ]

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
        border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6">
          <Sparkles size={16} />
          Professional Journey
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">
          <span className="text-white">Work</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Building scalable enterprise applications, ERP systems,
          backend architectures, and automation workflows.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] 
        bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

        {experiences.map((exp, index) => (

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
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
            w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0f172a] shadow-lg z-10"></div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="ml-14 md:ml-0 md:w-1/2 
              bg-white/5 border border-white/10 backdrop-blur-xl
              rounded-3xl p-8 shadow-2xl transition-all duration-300
              hover:border-blue-400/30"
            >

              {/* Role */}
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                {exp.title}
              </h3>

              {/* Company */}
              <div className="flex items-center text-blue-400 mb-3">
                <Building2 size={18} className="mr-2" />
                <span>{exp.company}</span>
              </div>

              {/* Period */}
              <div className="flex items-center text-gray-400 mb-6 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {exp.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="px-3 py-1 rounded-full text-sm
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10
                    border border-white/10 text-gray-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">

                {exp.responsibilities.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-300 leading-relaxed">
                      {item}
                    </p>

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

export default Experience