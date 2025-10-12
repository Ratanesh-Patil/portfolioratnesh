import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const MiniProjects = () => {
  const liveProjects = [
    {
      title: "The Wild Oasis",
      description:
        "A small React project showcasing wildlife information with an interactive UI and responsive design.",
      technologies: ["React", "TailwindCSS", "Vercel"],
      link: "https://the-ultimate-react-l4j5.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Fast React Pizza Co.",
      description:
        "A fun, medium-scale pizza ordering React app with menu browsing, cart functionality, and responsive design.",
      technologies: ["React", "JavaScript", "TailwindCSS", "Vercel"],
      link: "https://the-ultimate-react-muzg.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "WorldWise",
      description:
        "A React project providing global travel information with interactive cards and search functionality.",
      technologies: ["React", "API Integration", "Vercel"],
      link: "https://the-ultimate-react-k3of.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "usePopcorn",
      description:
        "A React app that demonstrates movie search and recommendation features using external APIs and modern UI design.",
      technologies: ["React", "API Integration", "Vercel"],
      link: "https://the-ultimate-react.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="mini-projects" className="py-20">
    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
       Mini Live Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {liveProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
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
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                  className="border border-blue-400 bg-opacity-80 text-white px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:underline"
              >
                Visit Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default MiniProjects;