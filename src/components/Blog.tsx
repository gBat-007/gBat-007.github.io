import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Building Accessible Web Applications: A Developer's Guide",
      excerpt: "How focusing on accessibility from the start transformed my approach to web development and taught me the importance of inclusive design in creating meaningful user experiences.",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Accessibility", "Web Development", "React", "Inclusive Design"]
    },
    {
      id: 2,
      title: "Leading Tech Communities: Lessons from Student Leadership",
      excerpt: "Reflections on founding and leading technology clubs, the challenges of student leadership, and how to build thriving tech communities in educational settings.",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Leadership",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Leadership", "Community Building", "Student Organizations", "Mentorship"]
    },
    {
      id: 3,
      title: "Technology for Social Good: Making a Real Impact",
      excerpt: "Why every developer should consider the social impact of their work and how to integrate meaningful purpose into your projects and career journey.",
      date: "February 10, 2024",
      readTime: "7 min read",
      category: "Social Impact",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Social Impact", "Tech for Good", "Community Service", "Purpose-Driven Development"]
    },
    {
      id: 4,
      title: "From Idea to Production: Modern Web Development Workflow",
      excerpt: "The complete journey of developing and deploying modern web applications, including project planning, technology choices, and deployment strategies.",
      date: "January 25, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Web Development", "React", "Project Management", "Deployment"]
    },
    {
      id: 5,
      title: "Balancing Studies, Projects, and Community Impact",
      excerpt: "How I manage academic responsibilities, personal projects, community leadership, and social impact initiatives while maintaining passion for learning and growth.",
      date: "January 12, 2024",
      readTime: "5 min read",
      category: "Personal",
      image: "https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Time Management", "Student Life", "Productivity", "Work-Life Balance"]
    },
    {
      id: 6,
      title: "The Power of Teaching: Why Every Developer Should Mentor",
      excerpt: "How teaching coding workshops and mentoring other students transformed my understanding of technology and improved my own skills while helping others learn.",
      date: "December 18, 2023",
      readTime: "4 min read",
      category: "Teaching",
      image: "https://images.pexels.com/photos/1181402/pexels-photo-1181402.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Teaching", "Mentorship", "Knowledge Sharing", "Personal Growth"]
    }
  ];

  const categories = [
    { name: "All", count: posts.length, icon: BookOpen },
    { name: "Development", count: 2, icon: Code },
    { name: "Leadership", count: 1, icon: Lightbulb },
    { name: "Social Impact", count: 1, icon: BookOpen },
    { name: "Personal", count: 1, icon: BookOpen },
    { name: "Teaching", count: 1, icon: BookOpen }
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
            Thoughts & <span className="bg-gradient-to-r from-purple-600 to-accent-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Sharing my journey, learnings, and insights on technology, leadership, and creating positive impact through thoughtful development and community engagement.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
            >
              <category.icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className="text-sm bg-purple-200 px-2 py-1 rounded-full">{category.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-50 to-accent-50 rounded-2xl overflow-hidden shadow-lg mb-12"
        >
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  {posts[0].category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">{posts[0].title}</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-primary-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-accent-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-primary-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-accent-600 rounded-2xl p-8 mt-16 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified about new blog posts, project updates, and insights on technology, leadership, and social impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full text-primary-800 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;