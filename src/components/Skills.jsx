import {  motion } from 'framer-motion'
import { FaJava, FaReact, FaDatabase,  FaGithub, FaGitAlt } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiSpringboot, SiPostgresql, SiJavascript, SiHtml5, SiPostman, } from 'react-icons/si'
import { TbBrandMysql, TbBrandReactNative, TbBrandRedux } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

export const Skills = () => {
  const skillsData = [
    { name: 'Java', icon: FaJava ,color: 'text-red-500'},
    { name: 'Spring Boot', icon: SiSpringboot , color: 'text-green-500'},
    { name: 'React', icon: FaReact ,color: 'text-blue-400'},
    { name: 'Redux', icon: TbBrandRedux ,color: 'text-purple-400'},
    { name: 'JavaScript', icon: SiJavascript , color: 'text-yellow-400'},
    { name: 'Tailwind CSS', icon: RiTailwindCssFill , color: 'text-blue-400'},
    { name: 'HTML/CSS', icon: SiHtml5 , color: 'text-red-400'},
    { name: 'React Native', icon: TbBrandReactNative , color: 'text-blue-400'},
    { name: 'PostgreSQL', icon: SiPostgresql ,  color: 'text-blue-500'},
    { name: 'MySQL', icon: TbBrandMysql , color: 'text-blue-500'},
    { name: 'Postman', icon: SiPostman , color: 'text-orange-400'},
    { name: 'RESTful APIs', icon: FaDatabase ,  color: 'text-green-400'},
    { name: 'VsCode', icon: VscVscode , color: 'text-blue-500'},
    { name: 'GitHub ', icon: FaGithub , color: 'text-black-500'},
    { name: 'Git', icon: FaGitAlt , color: 'text-orange-500'},
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 ">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="flex flex-col items-center hover:shadow-lg hover:bg-gray-800  hover:bg-opacity-50 hover:backdrop-filter  hover:backdrop-blur-lg rounded-lg p-2 hover:transition hover:duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 rounded-full mb-4">
                <skill.icon className={`text-4xl ${skill.color}`} />
              </div>
              <p className="text-center font-semibold text-blue-400">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};
