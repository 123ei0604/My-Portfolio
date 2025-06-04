
import React from 'react';
import { Code, User, Monitor } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p>
                I'm a dedicated Full-Stack Developer with expertise in the MERN stack. 
                I specialize in creating scalable web applications that solve real-world problems.
              </p>
              <p>
                My passion lies in building modern, responsive applications using cutting-edge 
                technologies. I enjoy working on projects that challenge me to think creatively 
                and push the boundaries of what's possible with web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical blogs and community contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-700 rounded-lg border border-gray-600">
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white">Full-Stack</h3>
                <p className="text-sm text-gray-300">MERN Stack Expert</p>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg border border-gray-600">
                <Monitor className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white">Frontend</h3>
                <p className="text-sm text-gray-300">React & Modern UI</p>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg border border-gray-600">
                <User className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-sm text-gray-300">Problem Solver</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-blue-100">React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript/TypeScript</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-blue-100">Node.js, Express.js, RESTful APIs, Authentication, Database Design</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Databases & Tools</h4>
                  <p className="text-blue-100">MongoDB, MySQL, Git, Postman, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
