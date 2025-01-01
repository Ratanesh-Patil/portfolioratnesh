
import { Linkedin, Github, Mail, Phone } from 'lucide-react'
import profile from '../images/Ratnesh profile.jpg' 

export const Hero = () => {
  return (
<section className="flex flex-col md:flex-row items-center justify-center space-x-40 text-center md:text-left py-12 space-y-6 md:space-y-0 ">
  {/* Left Section - Info */}
  <div className="md:w-auto ">
    <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
    Ratnesh Patil
    </h1>
    <p className="text-xl text-gray-300 mb-4"> Full-Stack Software Developer</p>
    <div className="flex justify-center md:justify-start space-x-4">
      {[
        { icon: Mail, href: "mailto:ratnesh.k.patil@gmail.com" },
        { icon: Phone, href: "tel:+917350402226" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-patil-307013217/" },
        { icon: Github, href: "https://github.com/Ratanesh-Patil" }
      ].map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          <item.icon size={26} />
        </a>
      ))}
    </div>
  </div>

  {/* Right Section - Profile Image */}
  <div className="md:w-auto">
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400">
      <img src={profile} alt="Vidhi Mistry" className="w-full h-full object-cover" />
    </div>
  </div>
</section>


  
  )
}

