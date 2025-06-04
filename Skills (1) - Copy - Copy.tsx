
import React from 'react';
import { Code, Monitor, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-8 w-8" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript/TypeScript", level: 88 }
      ],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "Authentication", level: 85 },
        { name: "API Design", level: 88 }
      ],
      color: "purple"
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Git & GitHub", level: 92 },
        { name: "Postman", level: 88 },
        { name: "AWS", level: 75 }
      ],
      color: "indigo"
    }
  ];

  const tools = [
    "Git & GitHub", "Postman", "AWS", "VS Code",
    "Figma", "Photoshop", "Linux", "Firebase", "Vercel", "Heroku"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-700">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-700 text-${category.color}-400 rounded-xl mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced React patterns, cloud technologies, and modern development practices to stay 
              at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
