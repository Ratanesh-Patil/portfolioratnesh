import  { useState } from 'react'
import { Menu, X, Home, Briefcase, BookOpen, Code } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: 'Experience', icon: Briefcase },
    { name: 'Skills', icon: Code },
    { name: 'Education', icon: BookOpen },
    { name: 'Projects', icon: Home }
  ]

  return (
    <header className="py-6">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
         Ratnesh Patil
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 md:flex bg-gray-800 md:bg-transparent z-50 md:space-x-8`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={`#${item.name.toLowerCase()}`} 
                className="flex items-center py-2 px-4 md:px-0 hover:text-blue-400 transition duration-300"
                onClick={toggleMenu}
              >
                <item.icon className="mr-2" size={18} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <hr className="h-0.5 my-1 border-none bg-gradient-to-r from-blue-400 to-purple-600" /> */}
    </header>
  )
}

