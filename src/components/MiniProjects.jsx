// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";

// export const MiniProjects = () => {
//   const liveProjects = [
//     {
//       title: "The Wild Oasis",
//       description:
//         "A small React project showcasing wildlife information with an interactive UI and responsive design.",
//       technologies: ["React", "TailwindCSS", "Vercel"],
//       link: "https://the-ultimate-react-l4j5.vercel.app/",
//       image:
//         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Fast React Pizza Co.",
//       description:
//         "A fun, medium-scale pizza ordering React app with menu browsing, cart functionality, and responsive design.",
//       technologies: ["React", "JavaScript", "TailwindCSS", "Vercel"],
//       link: "https://the-ultimate-react-muzg.vercel.app/",
//       image:
//         "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "WorldWise",
//       description:
//         "A React project providing global travel information with interactive cards and search functionality.",
//       technologies: ["React", "API Integration", "Vercel"],
//       link: "https://the-ultimate-react-k3of.vercel.app/",
//       image:
//         "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "usePopcorn",
//       description:
//         "A React app that demonstrates movie search and recommendation features using external APIs and modern UI design.",
//       technologies: ["React", "API Integration", "Vercel"],
//       link: "https://the-ultimate-react.vercel.app/",
//       image:
//         "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=80",
//     },
//   ];

//   return (
//     <section id="mini-projects" className="py-20">
//     <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//        Mini Live Projects
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {liveProjects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h3 className="text-2xl font-semibold mb-2 text-blue-400">
//                 {project.title}
//               </h3>
//               <p className="mb-4 text-gray-300">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                   className="border border-blue-400 bg-opacity-80 text-white px-2 py-1 rounded-md text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-blue-400 hover:underline"
//               >
//                 Visit Project <ExternalLink className="ml-2 w-4 h-4" />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default MiniProjects;


'use client'

import { motion } from "framer-motion"

import {
  ExternalLink,
  Sparkles,
} from "lucide-react"

export const MiniProjects = () => {

  const liveProjects = [

    {
      title: "The Wild Oasis",

      description:
        "Interactive React application with modern UI, responsive layouts, and optimized component architecture.",

      technologies: [
        "React",
        "TailwindCSS",
        "Vercel"
      ],

      link:
        "https://the-ultimate-react-l4j5.vercel.app/",

      image:
        "/portfolioratnesh/mini-projects/wild-oasis.png"
    },

    {
      title: "Fast React Pizza Co.",

      description:
        "Pizza ordering application with cart workflows, responsive design, and dynamic state management.",

      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS"
      ],

      link:
        "https://the-ultimate-react-muzg.vercel.app/",

      image:
        "/portfolioratnesh/mini-projects/fast-react-pizza.png"
    },

    {
      title: "WorldWise",

      description:
        "Travel-focused React application with API integrations, dynamic search, and interactive UI components.",

      technologies: [
        "React",
        "API Integration",
        "Vercel"
      ],

      link:
        "https://the-ultimate-react-k3of.vercel.app/",

      image:
        "/portfolioratnesh/mini-projects/world-wise.png"
    },

    {
      title: "usePopcorn",

      description:
        "Movie search and recommendation platform powered by external APIs and reusable React components.",

      technologies: [
        "React",
        "REST APIs",
        "Vercel"
      ],

      link:
        "https://the-ultimate-react.vercel.app/",

      image:
        "/portfolioratnesh/mini-projects/use-popcorn.png"
    }

  ]

  return (

    <section
      id="mini-projects"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 
      bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}

        className="text-center mb-16"
      >

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
        border border-blue-500/20 bg-blue-500/10 
        text-blue-400 text-sm mb-6">

          <Sparkles size={16} />
          Frontend Engineering

        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Live React</span>{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            Projects
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Interactive frontend applications focused on
          UI engineering, API integrations, and responsive design.
        </p>

      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {liveProjects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -8
            }}

            className="group
            bg-white/5 border border-white/10
            backdrop-blur-xl rounded-3xl overflow-hidden
            shadow-2xl hover:border-blue-400/20
            transition-all duration-300"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}

                className="w-full h-52 object-cover
                transition-transform duration-700
                group-hover:scale-105"
              />

              <div className="absolute inset-0
              bg-gradient-to-t from-[#0f172a] to-transparent"></div>

              {/* LIVE Badge */}
              <div className="absolute top-4 left-4">

                <div className="px-3 py-1 rounded-full
                bg-green-500/10 border border-green-500/20
                text-green-400 text-xs font-semibold
                backdrop-blur-md">

                  LIVE

                </div>

              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech, i) => (

                  <div
                    key={i}

                    className="px-3 py-1 rounded-full text-xs
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10
                    border border-white/10 text-gray-300"
                  >
                    {tech}
                  </div>

                ))}

              </div>

                
              {/* Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"

                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}

                className="flex items-center justify-center gap-2
                w-full py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-purple-600
                text-white font-semibold"
              >

                Visit Project

                <ExternalLink size={16} />

              </motion.a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default MiniProjects