
// import { motion } from 'framer-motion';

// export const Projects = () => {


//   const projectsData = [
//     {
//       title: 'Enterprise Resource Planning (ERP) System',
//       description: 'Developed a comprehensive ERP system to streamline and automate core business processes in various departments such as finance, human resources, supply chain and manufacturing.',
//       technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RESTful APIs'],
//       image: 'https://st3.depositphotos.com/1071909/14471/i/600/depositphotos_144711965-stock-photo-enterprise-resource-planning-erp.jpg',
//     },
//     {
//       title: 'Hospital Management System',
//       description: 'Developed a Hospital Management System (HMS) to automate and streamline hospital operations, including patient management, appointment scheduling, billing, and inventory management.',
//       technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RESTful APIs'],
//       image: 'https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg',
//     },
//     {
//       title: 'Bike Rental System',
//       description: 'Designed an online Bike Rental System for a company that specializes in bike rental. Customers can view available bikes, register, view profiles, and book bikes through the platform.',
//       technologies: ['Java', 'Spring Boot', 'JPA', 'JavaScript', 'ReactJS', 'MySQL'],
//       image: 'https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Bike-Rental-System.webp?fit=640%2C427&ssl=1',
//     },
//   ];


//   return (
//     <section id="projects" className="py-20">
//     <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//       Projects
//     </h2>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projectsData.map((project, index) => (
//         <motion.div
//           key={project.title}
//           className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           <div className="p-4">
//             <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
//             <p className="mb-4 text-gray-300">{project.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="border border-blue-400 bg-opacity-80 text-white px-2 py-1 rounded-md text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </section>
  
    
//   );
// };

'use client'

import { motion } from 'framer-motion'

import {
  Sparkles,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2
} from 'lucide-react'

export const Projects = () => {

  const featuredProjects = [

    {
      title: "Enterprise Resource Planning (ERP) System",

      description:
        "Developed enterprise ERP modules for procurement, inventory, manufacturing, finance, and GST workflows with secure authentication, cloud storage integration, and automated reporting pipelines.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "AWS S3",
        "JWT",
        "RabbitMQ",
        "Redis"
      ],

      features: [
        "200+ Daily GST Transactions",
        "JWT Authentication & RBAC",
        "AWS S3 File Storage",
        "Automated PDF Generation",
        "Inventory & Procurement Workflows"
      ],

      image:
        "/portfolioratnesh/projects/Erp-loginPage.png",

      liveLink:
        "#",

      githubLink:
        "#",

      status:
        ["ENTERPRISE", "SCALABLE"]
    },

    {
      title: "Customer Relationship Management (CRM) System",

      description:
        "Built scalable CRM workflows for lead management, sales tracking, customer engagement, and workflow automation using Spring Boot microservices, RabbitMQ, Redis caching, and React dashboards.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "DigitalOcean Spaces"
      ],

      features: [
        "Lead & Customer Management",
        "RabbitMQ Notifications",
        "Redis Caching",
        "Workflow Automation",
        "Microservices Architecture"
      ],

      image:
        "/portfolioratnesh/projects/CRM-LoginPage.png",

      liveLink:
        "https://purpleradianceone.com",

      githubLink:
        "#",

      status:
        ["LIVE", "MICROSERVICES"]
    }

  ]

  const secondaryProjects = [

    {
      title: "Hospital Management System",

      description:
        "Developed hospital workflows for appointments, patient records, billing, inventory management, and Firebase push notifications.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Firebase"
      ],

      image:
        "/portfolioratnesh/projects/Hms-LoginPage.png"
    },

    {
      title: "Bike Rental System",

      description:
        "Designed and developed an online bike rental platform with booking workflows, customer management, and vehicle tracking features.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL"
      ],

      image:
        "https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Bike-Rental-System.webp?fit=640%2C427&ssl=1"
    }

  ]

  return (

    <section
      id="projects"
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
          Enterprise Applications

        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Featured</span>{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            Projects
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Scalable enterprise-grade applications focused on
          automation, backend architecture, workflows,
          and modern system design.
        </p>

      </motion.div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 mb-16">

        {featuredProjects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            whileHover={{
              y: -10
            }}

            className="group
            bg-white/5 border border-white/10
            backdrop-blur-xl rounded-[32px]
            overflow-hidden shadow-2xl
            hover:border-blue-400/20
            transition-all duration-300"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover
                transition-transform duration-700
                group-hover:scale-105"
              />

              <div className="absolute inset-0
              bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent"></div>

              {/* Status Badges */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-3">

                {project.status.map((badge, i) => (

                  <div
                    key={i}

                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    border backdrop-blur-md

                    ${badge === 'LIVE'
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                    }
                    `}
                  >
                    {badge}
                  </div>

                ))}

              </div>

            </div>

            {/* Content */}
            <div className="p-8">

              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-5 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-7">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">

                {project.features.map((feature, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}

                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-300">
                      {feature}
                    </p>

                  </motion.div>

                ))}

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-10">

                {project.technologies.map((tech, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}

                    className="px-4 py-2 rounded-full
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10
                    border border-white/10
                    text-gray-300 text-sm"
                  >
                    {tech}
                  </motion.div>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  className="flex items-center gap-2
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-blue-500 to-purple-600
                  text-white font-semibold shadow-lg"
                >

                  Live Preview

                  <ArrowUpRight size={18} />

                </motion.a>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  className="flex items-center gap-2
                  px-6 py-3 rounded-xl
                  border border-white/10
                  bg-white/5 text-white
                  hover:bg-white/10 transition"
                >

                  GitHub

                  <Github size={18} />

                </motion.a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Secondary Projects */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {secondaryProjects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            whileHover={{
              y: -8
            }}

            className="group
            bg-white/5 border border-white/10
            backdrop-blur-xl rounded-3xl
            overflow-hidden shadow-2xl
            hover:border-blue-400/20
            transition-all duration-300"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover
                transition-transform duration-700
                group-hover:scale-105"
              />

              <div className="absolute inset-0
              bg-gradient-to-t from-[#0f172a] to-transparent"></div>

            </div>

            {/* Content */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">

                {project.technologies.map((tech, i) => (

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

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}

                className="flex items-center gap-2
                text-blue-400 font-medium"
              >

                View Details

                <ExternalLink size={16} />

              </motion.button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Projects