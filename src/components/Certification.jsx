import { Award } from "lucide-react";
import {  motion } from 'framer-motion'
import React from "react";

function Certification() {

    const certifications = [
        "Completed Java and SQL certification from HackerRank.",
        "Completed the ReactJS and GitHub certification from Great Learning.",
        "The best outgoing sports student at SGI for 2015-16.",
        "Active participation in ENSEMBLE 2K17-18.",
      ];

  return (
    <section id="projects" className="py-20">

      <div className="grid md:grid-cols-1 gap-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
            <Award size={24} className="mr-2" />
            Certifications and Awards
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span className="text-gray-300">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certification;
