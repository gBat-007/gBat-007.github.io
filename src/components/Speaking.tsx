import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Calendar, MapPin, Users, Clock, Star } from 'lucide-react';

const Speaking: React.FC = () => {
  const talks = [
    {
      id: 1,
      title: "Building Inclusive Web Applications",
      event: "Student Tech Conference 2024",
      date: "March 20, 2024",
      location: "Virtual Event",
      audience: "250+ student developers",
      duration: "45 minutes",
      description: "Exploring how to design and develop web applications that are accessible, inclusive, and create meaningful connections across diverse user communities.",
      topics: ["Web Accessibility", "Inclusive Design", "React Development", "User Experience"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Keynote"
    },
    {
      id: 2,
      title: "From Concept to Code: A Developer's Journey",
      event: "Local Developer Meetup",
      date: "February 15, 2024",
      location: "Tech Hub Downtown",
      audience: "60+ local developers",
      duration: "30 minutes",
      description: "Sharing the complete journey of developing modern web applications, including project planning, technology choices, and lessons learned from real-world implementations.",
      topics: ["Project Planning", "Technology Stack", "Best Practices", "Career Development"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Leading Tech Communities in School",
      event: "Student Leadership Summit",
      date: "January 25, 2024",
      location: "Regional Conference Center",
      audience: "120+ student leaders",
      duration: "25 minutes",
      description: "Practical strategies for starting and managing technology clubs, building engaged communities, and creating lasting impact through peer-to-peer learning and mentorship.",
      topics: ["Leadership", "Community Building", "Event Organization", "Mentorship"],
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Panel"
    }
  ];

  const workshops = [
    {
      title: "React Fundamentals for Beginners",
      frequency: "Monthly",
      participants: "20-25 students",
      description: "Hands-on introduction to modern web development"
    },
    {
      title: "Building Responsive Web Applications",
      frequency: "Quarterly",
      participants: "30-35 students",
      description: "Creating mobile-first, accessible web experiences"
    },
    {
      title: "Full-Stack Development Bootcamp",
      frequency: "Bi-monthly",
      participants: "15-20 students",
      description: "Complete web application development from frontend to backend"
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
            Speaking & <span className="bg-gradient-to-r from-purple-600 to-accent-600 bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Sharing knowledge and inspiring the next generation of developers through talks, workshops, and educational initiatives focused on modern web development and community building.
          </p>
        </motion.div>

        {/* Featured Talks */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-800 mb-8"
          >
            Recent Speaking Engagements
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {talks.map((talk, index) => (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                      {talk.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <Mic className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-2">{talk.title}</h4>
                  <p className="text-purple-600 font-medium mb-4">{talk.event}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-primary-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{talk.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{talk.audience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{talk.duration}</span>
                    </div>
                  </div>

                  <p className="text-primary-600 mb-4 leading-relaxed">{talk.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {talk.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshop Series */}
        <div className="bg-gradient-to-r from-purple-50 to-accent-50 rounded-2xl p-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-800 mb-8 text-center"
          >
            Regular Workshop Series
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h4 className="text-lg font-bold text-primary-800 mb-3">{workshop.title}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-600">Frequency:</span>
                    <span className="font-medium text-purple-600">{workshop.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-600">Participants:</span>
                    <span className="font-medium text-purple-600">{workshop.participants}</span>
                  </div>
                </div>
                <p className="text-primary-600 text-sm">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Interested in Having Me Speak at Your Event?
          </h3>
          <p className="text-primary-600 mb-8 max-w-2xl mx-auto">
            I love sharing my experiences and learnings with fellow students and developers. Let's connect and explore how we can inspire the next generation of tech innovators together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;