
import React, { useState, useEffect } from 'react';
import { Menu, User, Code, Mail, Book } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
