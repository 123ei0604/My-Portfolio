
import React, { useState } from 'react';
import { Github, Link, Calendar, Star } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Bhasamitra – Dialect Converter",
      description: "AI-powered tool that converts formal Hindi into Bhojpuri using fine-tuned mBART-50 model",
      longDescription: "Developed Bhashamitra, an innovative AI-powered tool that addresses the linguistic gap for low-resource Indian dialects. The system converts formal Hindi into Bhojpuri using a fine-tuned mBART-50 model, enabling high-quality, context-aware translations.",
      technologies: ["React.js", "Flask", "Whisper API", "NLLB-200", "mBART-50"],
      date: "April 2025",
      features: [
        "90,000+ sentence Hindi-Bhojpuri dataset curation",
        "Real-time dialect translation",
        "Full-stack web application",
        "Context-aware AI translations"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "4th CVMI Conference Website",
      description: "Official website for IEEE CVMI Conference 2025 with dynamic schedules and secure registration",
      longDescription: "Developed the official website for the 4th IEEE Computer Vision and Machine Learning Intelligence Conference 2025. The platform features dynamic scheduling, speaker profiles, and secure payment integration.",
      technologies: ["HTML", "Tailwind CSS", "Next.js", "Payment Gateway"],
      date: "March 2025",
      features: [
        "Dynamic conference schedules",
        "Speaker profile management",
        "Secure registration system",
        "Payment gateway integration",
        "Real-time updates"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Full-Stack Weather Application",
      description: "Dynamic weather app with responsive UI and real-time data from OpenWeatherMap APIs",
      longDescription: "Built a comprehensive weather application featuring a dynamic, responsive UI for real-time weather updates. Implemented robust backend services for API management and secure third-party communications.",
      technologies: ["React.js", "Node.js", "Express.js", "OpenWeatherMap API"],
      date: "May 2025",
      features: [
        "Real-time weather data",
        "Location-based forecasts",
        "Responsive design",
        "API integration",
        "Temperature, humidity, wind data"
      ],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      category: "Full-Stack"
    }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar className="h-4 w-4" />
                {project.date}
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.longDescription}</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                <Github className="h-5 w-5" />
                View Code
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Link className="h-5 w-5" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    Learn More →
                  </button>
                  <div className="flex gap-2">
                    <Github className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                    <Link className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/FUTURE_FS_01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
