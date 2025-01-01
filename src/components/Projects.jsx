import { Briefcase, Award } from "lucide-react";
import { motion } from 'framer-motion';

export const Projects = () => {


  const projectsData = [
    {
      title: 'Enterprise Resource Planning (ERP) System',
      description: 'Developed a comprehensive ERP system to streamline and automate core business processes in various departments such as finance, human resources, supply chain and manufacturing.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RESTful APIs'],
      image: 'https://st3.depositphotos.com/1071909/14471/i/600/depositphotos_144711965-stock-photo-enterprise-resource-planning-erp.jpg',
    },
    {
      title: 'Hospital Management System',
      description: 'Developed a Hospital Management System (HMS) to automate and streamline hospital operations, including patient management, appointment scheduling, billing, and inventory management.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RESTful APIs'],
      image: 'https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg',
    },
    {
      title: 'Bike Rental System',
      description: 'Designed an online Bike Rental System for a company that specializes in bike rental. Customers can view available bikes, register, view profiles, and book bikes through the platform.',
      technologies: ['Java', 'Spring Boot', 'JPA', 'JavaScript', 'ReactJS', 'MySQL'],
      image: 'https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Bike-Rental-System.webp?fit=640%2C427&ssl=1',
    },
  ];

  const certifications = [
    "Data Quality Analyst – Concentrix Daksh Pvt. Ltd.",
    "Machine Learning – HarvardX",
  ];

  return (
    // <section id="projects" className="py-20">
    //   <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
    //     Projects & Certifications
    //   </h2>
    //   <div className="grid md:grid-cols-2 gap-8">
    //     <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
    //       <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
    //         <Briefcase size={24} className="mr-2" />
    //         Projects
    //       </h3>
    //       <ul className="space-y-2">
    //         {projects.map((project, index) => (
    //           <li key={index} className="flex items-center">
    //             <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
    //             <span className="text-gray-300">{project}</span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
    //       <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
    //         <Award size={24} className="mr-2" />
    //         Certifications
    //       </h3>
    //       <ul className="space-y-2">
    //         {certifications.map((cert, index) => (
    //           <li key={index} className="flex items-center">
    //             <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
    //             <span className="text-gray-300">{cert}</span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    <section id="projects" className="py-20">
    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <motion.div
          key={project.title}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-blue-400 bg-opacity-80 text-white px-2 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  
    
  );
};
