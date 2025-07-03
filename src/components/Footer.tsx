import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Github, Linkedin, Mail, Twitter, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Speaking', href: '#speaking' },
    { name: 'Blog', href: '#blog' },
    { name: 'Social Impact', href: '#impact' }
  ];

  const projects = [
    { name: 'CulturalConnect', href: '#' },
    { name: 'EduTracker Pro', href: '#' },
    { name: 'GreenImpact', href: '#' },
    { name: 'CodeMentor Hub', href: '#' }
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GB</span>
                </div>
                <span className="text-xl font-bold">Gautam Bansal</span>
              </div>
              <p className="text-primary-300 leading-relaxed">
                Passionate app developer and creative technologist dedicated to building innovative solutions that bridge cultures and create meaningful impact through technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-primary-300"
            >
              <MapPin className="w-4 h-4" />
              <span>Based in India</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Featured Projects
            </motion.h3>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <motion.li
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={project.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {project.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Let's Connect
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-300 mb-6"
            >
              I'm always excited to connect with fellow developers, collaborate on projects, or discuss opportunities to create positive impact through technology.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-primary-300 hover:bg-purple-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-primary-700 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-300 text-sm mb-4 md:mb-0">
              © 2024 Gautam Bansal. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-primary-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and lots of</span>
              <span className="text-purple-400 font-medium">code</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;