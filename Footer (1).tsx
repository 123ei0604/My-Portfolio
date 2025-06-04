
import React from 'react';
import { Github, Mail, User, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Pratik's Portfolio
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-Stack Developer & ML Engineer passionate about creating innovative solutions 
              with cutting-edge technologies. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/FUTURE_FS_01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:pratikic2005@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Full-Stack Development
              </li>
              <li className="flex items-center gap-2">
                <User className="h-4 w-4" />
                AI/ML Solutions
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                API Development
              </li>
              <li className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Technical Consulting
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pratik. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/FUTURE_FS_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                GitHub Repository
              </a>
              <span className="text-gray-600">•</span>
              <p className="text-gray-400 text-sm">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
