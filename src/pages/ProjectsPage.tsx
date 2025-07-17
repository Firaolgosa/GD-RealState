import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight, Sparkles } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Minarole Site",
      location: "Infront of Englise Embassy",
      price: "$850,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "/images/tafo.jpg",
      description: "Experience urban luxury in this stunning 2-bedroom loft featuring floor-to-ceiling windows, premium finishes, and breathtaking city views. Located in the heart of downtown with easy access to dining, shopping, and entertainment. This architectural masterpiece combines modern design with timeless elegance."
    },
    {
      id: 2,
      title: "Modern Family Home",
      location: "Suburban Heights",
      price: "$650,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A beautiful 4-bedroom family home with a spacious backyard and contemporary design throughout. Perfect for growing families, this property features an open-concept living space, gourmet kitchen, and luxurious master suite. The landscaped garden provides a private oasis for relaxation and entertainment."
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="h-12 w-12 text-blue-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Featured Projects
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover exceptional properties that redefine modern living
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div 
                  className={`relative h-96 overflow-hidden group ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg"></div>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.price}
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" />
                            <span>{project.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="h-4 w-4 mr-1" />
                            <span>{project.bathrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="h-4 w-4 mr-1" />
                            <span>{project.sqft} sqft</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center text-blue-400 mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                    </motion.div>
                    <span className="text-lg">{project.location}</span>
                  </div>
                  
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <motion.span
                        className="mr-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Explore Details
                      </motion.span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Find Your GD RealState?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let's start your journey to the perfect property today
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.span>
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;