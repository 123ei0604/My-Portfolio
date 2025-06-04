
import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:24px_24px] opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Pratiki Chakraborty
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with full-stack development. 
            Specializing in MERN stack and building scalable web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/FUTURE_FS_01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-gray-600"
              >
                <Github className="h-6 w-6 text-gray-300" />
              </a>
              <a
                href="mailto:pratikic2005@gmail.com"
                className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-gray-600"
              >
                <Mail className="h-6 w-6 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
