import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Users, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "CulturalConnect",
      description: "A React-based platform that connects people from different cultural backgrounds through shared experiences, language exchange, and cultural learning opportunities.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Cultural APIs"],
      category: "Web App",
      impact: "Bridging cultural divides through technology",
      links: {
        live: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "EduTracker Pro",
      description: "A comprehensive educational management system built with modern web technologies to help students track their academic progress and connect with mentors.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Web App",
      impact: "Empowering students through better organization",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "GreenImpact",
      description: "An environmental awareness mobile app that tracks carbon footprint, suggests eco-friendly alternatives, and connects users with local sustainability initiatives.",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Environmental APIs", "Data Visualization", "Geolocation"],
      category: "Mobile App",
      impact: "Promoting environmental consciousness",
      links: {
        appStore: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "CodeMentor Hub",
      description: "A collaborative platform that connects aspiring developers with experienced mentors, featuring code review tools, project collaboration, and learning resources.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "WebRTC", "Socket.io", "Code Editor Integration"],
      category: "Web Platform",
      impact: "Fostering developer community growth",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-800 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 to-accent-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Innovative applications that solve real-world problems, connect communities, and create positive social impact through thoughtful design and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {project.category.includes('Mobile') ? (
                      <Smartphone className="w-4 h-4 text-purple-600" />
                    ) : (
                      <Globe className="w-4 h-4 text-purple-600" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{project.title}</h3>
                <p className="text-primary-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-4 h-4 text-accent-500" />
                  <span className="text-sm text-accent-600 font-medium">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.links.appStore && (
                      <motion.a
                        href={project.links.appStore}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                        aria-label="View on App Store"
                      >
                        <Smartphone className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {(project.links.demo || project.links.live) && (
                      <motion.a
                        href={project.links.demo || project.links.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-accent-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;