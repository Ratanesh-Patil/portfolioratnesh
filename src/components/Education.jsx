import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Post Graduate Diploma In Advanced Computing (PG-DAC)",
      institution: "Institute for Advanced Computing and Software Development, Pune",
      period: "Sep 2022 – Mar 2023",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Savitribai phule pune university, Pune",
      period: "Sep 2016 – Aug 2019",
    },
  ];

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Education
      </h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400 flex items-center">
              <GraduationCap size={24} className="mr-2" />
              {edu.degree}
            </h3>
            <p className="text-gray-300 mb-2">{edu.institution}</p>
            <p className="text-sm text-gray-400 flex items-center">
              <Calendar size={18} className="mr-2" />
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
