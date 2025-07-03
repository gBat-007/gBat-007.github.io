import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Smartphone, Monitor, Calendar, MapPin } from 'lucide-react';

const Clubs: React.FC = () => {
  const clubs = [
    {
      id: 1,
      name: "TriDev",
      role: "Founder & President",
      description: "A student-led technology club focused on Swift, Flutter, and VS Code development. We organize workshops, hackathons, and collaborative projects.",
      members: "25+ active members",
      founded: "2023",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Swift", "Flutter", "VS Code", "Git"],
      activities: [
        "Weekly coding workshops",
        "Monthly hackathons",
        "Collaborative open-source projects",
        "Mentorship programs"
      ],
      achievements: [
        "Organized 12 successful workshops",
        "Launched 3 collaborative apps",
        "Mentored 15+ new developers"
      ]
    },
    {
      id: 2,
      name: "Young Innovators Society",
      role: "Vice President",
      description: "A cross-disciplinary club that brings together students interested in technology, design, and entrepreneurship to solve real-world problems.",
      members: "40+ members",
      founded: "2022",
      image: "https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Design Thinking", "Prototyping", "Research", "Innovation"],
      activities: [
        "Innovation challenges",
        "Design thinking workshops",
        "Startup pitch competitions",
        "Industry mentor sessions"
      ],
      achievements: [
        "Won regional innovation competition",
        "Secured $5,000 in funding for student projects",
        "Partnered with 3 local businesses"
      ]
    },
    {
      id: 3,
      name: "Code for Good",
      role: "Technical Lead",
      description: "A service-oriented programming club that develops technology solutions for non-profit organizations and community initiatives.",
      members: "30+ volunteers",
      founded: "2023",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Mobile Development", "Database Design"],
      activities: [
        "Non-profit website development",
        "Community app projects",
        "Digital literacy training",
        "Pro bono consulting"
      ],
      achievements: [
        "Delivered 8 projects to local nonprofits",
        "Trained 50+ community members",
        "Saved organizations $20,000+ in development costs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-800 mb-6">
            Student <span className="bg-gradient-to-r from-purple-600 to-accent-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Leading and participating in student organizations that foster collaboration, innovation, and positive community impact through technology education.
          </p>
        </motion.div>

        <div className="space-y-12">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-800 mb-2">{club.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-primary-600">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{club.members}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Founded {club.founded}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {club.role}
                    </div>
                  </div>

                  <p className="text-primary-600 mb-6 leading-relaxed">{club.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-800 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {club.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-800 mb-3">Key Activities</h4>
                      <ul className="space-y-1">
                        {club.activities.slice(0, 3).map((activity, i) => (
                          <li key={i} className="text-sm text-primary-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-primary-800 mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {club.achievements.map((achievement, i) => (
                        <div key={i} className="bg-gradient-to-r from-purple-50 to-accent-50 p-4 rounded-lg">
                          <p className="text-sm text-primary-700 font-medium">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;