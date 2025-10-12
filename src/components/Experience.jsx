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
'use client'
import { Calendar, Building, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export const Experience = () => {
  const experience = {
    title: "Full-Stack Software Developer",
    company: "PurpleGrad, Pune",
    period: "Sept, 2023 – Present",
    responsibilities: [
      "Developed Full-Stack Applications using Java (backend) and React (frontend).",
      "Managed PostgreSQL databases, including schema design and query optimization.",
      "Created RESTful APIs for efficient client-server communication.",
      "Engaged in Agile practices and collaborated with cross-functional teams.",
      "Implemented security measures including role-based access control and data encryption."
    ],
    achievements: [
      "Developed and deployed an ERP system, improving operational efficiency by 30%.",
      "Led the creation of a Hospital Management System, enhancing patient care and increasing operational efficiency by 20%."
    ]
  };

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Experience
      </h2>

      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-blue-400">{experience.title}</h3>
        <p className="text-gray-300 mb-2 flex items-center">
          <Building size={18} className="mr-2" />
          {experience.company}
        </p>
        <p className="text-sm text-gray-400 mb-6 flex items-center">
          <Calendar size={18} className="mr-2" />
          {experience.period}
        </p>

        <h4 className="text-lg font-semibold text-gray-300 mb-2">Responsibilities:</h4>
        <ul className="list-none space-y-2 mb-4">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start text-gray-300">
              <CheckCircle size={16} className="mr-2 mt-1 text-green-400 flex-shrink-0" />
              {resp}
            </li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Achievements:</h4>
        <ul className="list-none space-y-2">
          {experience.achievements.map((ach, idx) => (
            <li key={idx} className="flex items-start text-gray-300">
              <CheckCircle size={16} className="mr-2 mt-1 text-yellow-400 flex-shrink-0" />
              {ach}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Experience;

