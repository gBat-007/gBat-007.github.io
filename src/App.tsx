import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Clubs from './components/Clubs';
import Speaking from './components/Speaking';
import SocialImpact from './components/SocialImpact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-purple-600">GB</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex space-x-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="clubs">
          <Clubs />
        </section>
        
        <section id="speaking">
          <Speaking />
        </section>
        
        <section id="impact">
          <SocialImpact />
        </section>
        
        <section id="blog">
          <Blog />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;