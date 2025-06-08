// import { Award } from "lucide-react";
// import {  motion } from 'framer-motion'
// import React from "react";

// function Certification() {

//     const certifications = [
//         "Completed Java and SQL certification from HackerRank.",
//         "Completed the ReactJS and GitHub certification from Great Learning.",
//         "The best outgoing sports student at SGI for 2015-16.",
//         "Active participation in ENSEMBLE 2K17-18.",
//       ];

//   return (
//     <section id="projects" className="py-20">

//       <div className="grid md:grid-cols-1 gap-8">
//         <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
//           <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
//             <Award size={24} className="mr-2" />
//             Certifications and Awards
//           </h3>
//           <ul className="space-y-2">
//             {certifications.map((cert, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
//                 <span className="text-gray-300">{cert}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certification;

import { Award } from "lucide-react";
import { motion } from "framer-motion";
import wellsFargoImg from "../images/Wells-Fargo.png";
import greatLearingGitHub from "../images/Great-Learing-GitHub.png";
import greatLearingReact from "../images/Great-Learing-React.png";
import javaHackerRank from "../images/java-hackerrank.png";
import sqlHackerRank from "../images/SQL-hackerRank.png";
import frontEnd from "../images/Skyscanner-Front-End.png";
import nodeJs from "../images/Nodejs-Certificate.png";




// Sample image URLs — replace with your own
const certifications = [
    {
    title: "Software Engineer certification from Wells Fargo",
    image: wellsFargoImg,
  },
  {
    title: "SQL certification from HackerRank",
    image: sqlHackerRank,
  },
 
  {
    title: "ReactJS certification from Great Learning",
    image: greatLearingReact,
  },
   {
    title: "Java certification from HackerRank",
    image: javaHackerRank,
  },
  {
    title: "GitHub certification from Great Learning",
    image: greatLearingGitHub,
  },
  {
    title: "NodeJs certification from Scaler",
    image: nodeJs,
  },
  {
    title: "Front-End Software Engineer certification from Skyscanner",
    image: frontEnd,
  },

 
];

function Certification() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-full mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center">
          <Award size={24} className="mr-2" />
          Certifications and Awards
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain mb-2 rounded-md"
              />
              <p className="text-gray-200 text-sm font-medium">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
