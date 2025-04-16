import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1500px at 90% -10%)',
      transition: { type: 'spring', duration: 0.7, stiffness: 20 }
    },
    closed: {
      clipPath: 'circle(30px at 90% -10%)',
      transition: { type: 'spring', duration: 0.5, stiffness: 400, damping: 40 }
    }
  };

  const items = [
    { id: 1, title: "À propos", link: "#apropos", to: "apropos"},
    { id: 2, title: "Formations", link: "#formations", to: "formations"},
    { id: 3, title: "Téchnologies", link: "#téchnologies", to: "téchnologies"},
    { id: 4, title: "Projets", link: "#projets", to: "projets"},
    { id: 5, title: "Certifications", link: "#certifications", to: "certifications"},
    { id: 6, title: "Contact", link: "#contact", to: "contact"},
  ];

  return (
    <div className="text-gray-800" style={{backgroundColor: '#94a187'}}>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6 px-4"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-[#333333">Port</span>
          <span style={{color: '#556048'}}>Folio</span>
        </div>

        <ul className="flex items-center space-x-6 lg:text-lg md:text-base list-none">
          {items.map((item) => (
            <li key={item.id} className="relative group">
              <Link 
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="px-3 py-2  hover:bg-[#6b7b5f]  hover:text-white  cursor-pointer rounded-lg transition-all duration-300 hover:bg-opacity-90"
               
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/CV____ASSOULI _MERIEM.pdf"
          download="CV____ASSOULI_MERIEM.pdf"
          className="md:text-base lg:text-lg text-white px-5 py-2 rounded-full bg-[#556048]  hover:bg-[#6b7b5f]   transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"

        >
          Télécharger CV
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2"
        >
          <span className="text-gray-800">Port</span>
          <span style={{color: '#556048'}}>Folio</span>
        </motion.div>

        <button
          onClick={() => setMenu((prev) => !prev)}
          className="z-20 cursor-pointer p-2 rounded-full transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {menu ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-screen z-10 flex flex-col items-center justify-center px-6"
        style={{backgroundColor: '#94a187'}}
        initial={false}
        animate={menu ? "open" : "closed"}
        variants={variants}
      >
        <ul className="flex flex-col space-y-6 text-xl">
          {items.map((item) => (
            <li key={item.id} className="text-center">
              <Link 
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="px-6 py-3 cursor-pointer block rounded-lg transition-all duration-300"
                style={{':hover': {backgroundColor: '#556048', color: 'white'}}}
                onClick={() => setMenu(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        
        <a
          href="/CV____ASSOULI_MERIEM.pdf"
          download="CV____ASSOULI_MERIEM.pdf"
          className="mt-10 text-lg text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          style={{backgroundColor: '#556048', ':hover': {backgroundColor: '#6b7b5f'}}}
        >
          Télécharger CV
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;