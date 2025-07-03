import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Users, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "World of Games: Cultural Clash",
      description: "A SwiftUI-based mobile app celebrating traditional games from around the world, connecting cultures through play and learning.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["SwiftUI", "iOS", "Cultural Research", "Game Design"],
      category: "Mobile App",
      impact: "Connecting cultures through traditional games",
      links: {
        appStore: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Community Connect",
      description: "A social platform built with React and Firebase that connects local communities and facilitates neighborhood collaboration.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Firebase", "Tailwind CSS", "Community Design"],
      category: "Web App",
      impact: "Strengthening local communities",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "EcoTracker",
      description: "An environmental impact tracking app that helps users monitor their carbon footprint and suggest eco-friendly alternatives.",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["SwiftUI", "Core Data", "Environmental APIs", "Data Visualization"],
      category: "Mobile App",
      impact: "Promoting environmental awareness",
      links: {
        appStore: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "StudyBuddy",
      description: "A collaborative learning platform that connects students and facilitates group study sessions and knowledge sharing.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Node.js", "MongoDB", "Real-time Chat"],
      category: "Mobile App",
      impact: "Enhancing collaborative learning",
      links: {
        appStore: "#",
        playStore: "#",
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
            Discover applications that bridge cultures, strengthen communities, and create positive social impact through thoughtful design and innovative technology.
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
                    {project.category === 'Mobile App' ? (
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