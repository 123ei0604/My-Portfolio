
import React, { useState } from 'react';
import { Mail, User, Github, Book } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a great conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always excited to work on new projects, discuss innovative ideas, or explore collaboration 
                opportunities. Whether you're looking for a developer, have a project in mind, or just want to 
                connect, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-600">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:pratikic2005@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    pratikic2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-600">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a href="tel:+917046542016" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +91 7046542016
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-600">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a 
                    href="https://github.com/FUTURE_FS_01" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    FUTURE_FS_01
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Book className="h-8 w-8" />
                <h3 className="text-xl font-bold">Technical Blog</h3>
              </div>
              <p className="text-blue-100 mb-4">
                I regularly write about web development and emerging technologies. 
                Check out my latest articles and insights.
              </p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-700 rounded-2xl shadow-lg p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Let's work together!"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
