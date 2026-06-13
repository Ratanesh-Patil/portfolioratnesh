// import {  motion } from 'framer-motion'
// import { DiRedis } from 'react-icons/di';
// import { FaJava, FaReact, FaDatabase,  FaGithub, FaGitAlt, FaDocker } from 'react-icons/fa'
// import { RiTailwindCssFill } from 'react-icons/ri';
// import { SiSpringboot, SiPostgresql, SiJavascript, SiHtml5, SiPostman, SiTypescript, SiRabbitmq, } from 'react-icons/si'
// import { TbBrandMysql, TbBrandReactNative, TbBrandRedux } from 'react-icons/tb';
// import { VscVscode } from 'react-icons/vsc';

// export const Skills = () => {
//   const skillsData = [
//     { name: 'Java', icon: FaJava ,color: 'text-red-500'},
//     { name: 'Spring Boot', icon: SiSpringboot , color: 'text-green-500'},
//     { name: 'RabbitMQ', icon: SiRabbitmq , color: 'text-orange-500'},
//     { name: 'React', icon: FaReact ,color: 'text-blue-400'},
//     { name: 'Redux', icon: TbBrandRedux ,color: 'text-purple-400'},
//     { name: 'JavaScript', icon: SiJavascript , color: 'text-yellow-400'},
//     { name: 'TypeScript', icon: SiTypescript , color: 'text-blue-400'},
//     { name: 'Tailwind CSS', icon: RiTailwindCssFill , color: 'text-blue-400'},
//     { name: 'HTML/CSS', icon: SiHtml5 , color: 'text-red-400'},
//     { name: 'React Native', icon: TbBrandReactNative , color: 'text-blue-400'},
//     { name: 'PostgreSQL', icon: SiPostgresql ,  color: 'text-blue-500'},
//     { name: 'MySQL', icon: TbBrandMysql , color: 'text-blue-500'},
//     { name: 'Redis', icon: DiRedis , color: 'text-red-500'},
//     { name: 'Postman', icon: SiPostman , color: 'text-orange-400'},
//     { name: 'RESTful APIs', icon: FaDatabase ,  color: 'text-green-400'},
//     { name: 'VsCode', icon: VscVscode , color: 'text-blue-500'},
//     { name: 'GitHub ', icon: FaGithub , color: 'text-black-500'},
//     { name: 'Git', icon: FaGitAlt , color: 'text-orange-500'},
//     { name: 'Docker', icon: FaDocker , color: 'text-blue-500'},
//   ]

//   return (
//     <section id="skills" className="py-16">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Skills
//         </motion.h2>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 ">
//           {skillsData.map((skill, index) => (
//             <motion.div 
//               key={skill.name}
//               className="flex flex-col items-center hover:shadow-lg hover:bg-gray-800  hover:bg-opacity-50 hover:backdrop-filter  hover:backdrop-blur-lg rounded-lg p-2 hover:transition hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="p-4 rounded-full mb-4">
//                 <skill.icon className={`text-4xl ${skill.color}`} />
//               </div>
//               <p className="text-center font-semibold text-blue-400">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// };


'use client'

import { motion } from 'framer-motion'

import {
  Server,
  MonitorSmartphone,
  Database,
  Cloud,
  Wrench,
  Sparkles
} from 'lucide-react'

import {
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaAws
} from 'react-icons/fa'

import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRabbitmq,
  SiRedis,
  SiMysql,
  SiGithubactions,
  SiPostman,
  SiJunit5,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiClaude
} from 'react-icons/si'

export const Skills = () => {

  const skillCategories = [

    {
      title: "Backend Engineering",
      icon: Server,
      color: "from-blue-500 to-cyan-500",

      skills: [
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
        { name: "Microservices", icon: Server, color: "text-blue-400" },
        { name: "Spring Security", icon: Server, color: "text-purple-400" },
        { name: "JWT Auth", icon: Server, color: "text-yellow-400" },
        { name: "REST APIs", icon: Server, color: "text-green-400" },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" }
      ]
    },

    {
      title: "Frontend Development",
      icon: MonitorSmartphone,
      color: "from-purple-500 to-pink-500",

      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "React Native", icon: SiReact, color: "text-cyan-400" }
      ]
    },

    {
      title: "Databases & Messaging",
      icon: Database,
      color: "from-green-500 to-emerald-500",

      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" }
      ]
    },

    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",

      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-300" },
        { name: "AWS S3", icon: FaAws, color: "text-orange-400" },
        { name: "DigitalOcean", icon: Cloud, color: "text-blue-400" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, color: "text-white" }
      ]
    },

    {
      title: "Tools & Testing",
      icon: Wrench,
      color: "from-pink-500 to-purple-500",

      skills: [
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "JUnit", icon: SiJunit5, color: "text-green-400" },
        { name: "Mockito", icon: Wrench, color: "text-yellow-400" },
        { name: "Apache POI", icon: Wrench, color: "text-blue-400" },
        { name: "iText7", icon: Wrench, color: "text-red-400" },
        { name: "AG Grid", icon: Wrench, color: "text-green-400" }
      ]
    },

    {
      title: "AI-Assisted Development",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",

      skills: [
        { name: "ChatGPT", icon: Sparkles, color: "text-green-400" },
        { name: "GitHub Copilot", icon: FaGithub, color: "text-white" },
        { name: "Claude AI", icon: SiClaude, color: "text-orange-400" }
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 
      bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
        border border-blue-500/20 bg-blue-500/10 
        text-blue-400 text-sm mb-6">

          <Sparkles size={16} />
          Technical Expertise

        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Skills</span>{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            & Technologies
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Technologies, frameworks, and tools used to build
          scalable enterprise-grade applications.
        </p>

      </motion.div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {skillCategories.map((category, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            whileHover={{ y: -8 }}

            className="bg-white/5 border border-white/10
            backdrop-blur-xl rounded-3xl p-8 shadow-2xl
            hover:border-blue-400/20 transition-all duration-300"
          >

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">

              <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color}`}>

                <category.icon
                  size={28}
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Production-ready technologies & tools
                </p>

              </div>

            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              {category.skills.map((skill, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    y: -4
                  }}

                  className="flex flex-col items-center justify-center
                  p-4 rounded-2xl
                  bg-gradient-to-br from-white/5 to-white/[0.02]
                  border border-white/10
                  hover:border-blue-400/30
                  transition-all duration-300"
                >

                  <skill.icon
                    className={`text-4xl mb-3 ${skill.color}`}
                  />

                  <p className="text-sm text-center text-gray-300 font-medium">
                    {skill.name}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  )
}

export default Skills