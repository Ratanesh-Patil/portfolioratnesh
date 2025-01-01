'use client'
import { Calendar, Building } from 'lucide-react'

export const Experience = () => {
  const experiences = [
    {
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
    }
  ];

  return (
    <section id="experience" className="py-20 ">
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ">
        Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl "
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{exp.title}</h3>
            <p className="text-gray-300 mb-2 flex items-center">
              <Building size={18} className="mr-2" />
              {exp.company}
            </p>
            <p className="text-sm text-gray-400 mb-4 flex items-center">
              <Calendar size={18} className="mr-2" />
              {exp.period}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-sm text-gray-300">{resp}</li>
              ))}
            </ul>
            {exp.achievements && (
              <>
                <h4 className="text-lg font-bold mt-4 mb-2 text-blue-400">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-sm text-gray-300">{ach}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
