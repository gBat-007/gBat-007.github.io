import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Book, Users, Globe, Award, Target } from 'lucide-react';

const SocialImpact: React.FC = () => {
  const initiatives = [
    {
      id: 1,
      name: "Digital Literacy for All",
      description: "A community initiative providing free technology education and digital skills training for underserved communities, focusing on bridging the digital divide.",
      impact: "300+ people trained",
      metrics: {
        participants: "300+ people trained",
        sessions: "50+ training sessions",
        volunteers: "20+ volunteer instructors",
        locations: "5 community centers"
      },
      image: "https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      founded: "2023",
      role: "Co-founder & Program Director"
    },
    {
      id: 2,
      name: "Code for Good Initiative",
      description: "Developing free websites and digital solutions for local non-profit organizations to help them better serve their communities and expand their reach.",
      impact: "12 organizations helped",
      metrics: {
        websites: "12 websites delivered",
        nonprofits: "12 organizations served",
        volunteers: "15+ developer volunteers",
        savings: "$25,000+ in development costs saved"
      },
      image: "https://images.pexels.com/photos/1181402/pexels-photo-1181402.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      founded: "2023",
      role: "Technical Lead"
    },
    {
      id: 3,
      name: "Youth Tech Mentorship",
      description: "A mentorship program connecting experienced developers with young aspiring programmers, providing guidance, resources, and career development support.",
      impact: "50+ mentees supported",
      metrics: {
        mentees: "50+ young developers",
        mentors: "25+ industry professionals",
        sessions: "200+ mentoring sessions",
        placements: "15+ internship placements"
      },
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      founded: "2024",
      role: "Program Coordinator"
    }
  ];

  const recognitions = [
    {
      title: "Community Impact Award",
      organization: "Local Tech Foundation",
      year: "2024",
      description: "Recognized for outstanding community service and technology education"
    },
    {
      title: "Young Leader in Tech",
      organization: "Regional Innovation Council",
      year: "2024",
      description: "Honored for leadership in promoting digital literacy and inclusion"
    },
    {
      title: "Student Volunteer Excellence",
      organization: "Community Service Board",
      year: "2023",
      description: "Awarded for exceptional volunteer service and community impact"
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
            Social <span className="bg-gradient-to-r from-purple-600 to-accent-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Using technology and leadership to create meaningful change in our community. Every project is an opportunity to make a positive difference and bridge digital divides.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800">350+</div>
            <div className="text-sm text-primary-600">People Impacted</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800">12</div>
            <div className="text-sm text-primary-600">Organizations Served</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800">3</div>
            <div className="text-sm text-primary-600">Active Initiatives</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-800">60+</div>
            <div className="text-sm text-primary-600">Volunteers Engaged</div>
          </div>
        </motion.div>

        {/* Main Initiatives */}
        <div className="space-y-12 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    src={initiative.image}
                    alt={initiative.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-800 mb-2">{initiative.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-primary-600">
                        <span>{initiative.role}</span>
                        <span>•</span>
                        <span>Founded {initiative.founded}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      initiative.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {initiative.status}
                    </div>
                  </div>

                  <p className="text-primary-600 mb-6 leading-relaxed">{initiative.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(initiative.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value.split(' ')[0]}</div>
                        <div className="text-sm text-primary-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 p-4 bg-gradient-to-r from-purple-50 to-accent-50 rounded-lg">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Impact: {initiative.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Recognition & Awards</h3>
            <p className="text-primary-600">Honored to be recognized for community service and social impact initiatives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-gradient-to-r from-purple-50 to-accent-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-primary-800 mb-2">{recognition.title}</h4>
                <p className="text-purple-600 font-medium mb-2">{recognition.organization}</p>
                <p className="text-sm text-primary-600 mb-2">{recognition.year}</p>
                <p className="text-sm text-primary-600">{recognition.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Want to Collaborate on Social Impact?
          </h3>
          <p className="text-primary-600 mb-8 max-w-2xl mx-auto">
            I'm always looking for new ways to use technology for good. If you have ideas for community projects or want to join existing initiatives, let's connect!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpact;