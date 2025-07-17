import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Car, Calendar, ChevronLeft, ChevronRight, ArrowLeft, Phone, Mail, Play, Image, Layout, Sparkles, Zap } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSection, setSelectedSection] = useState('images'); // 'images', 'video', 'floorplan'
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // Auto-slide images every 4 seconds
  useEffect(() => {
    if (selectedSection === 'images') {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [selectedSection]);

  // Sample project data
  const project = {
    id: parseInt(id || '1'),
    title: "Luxury Downtown Loft",
    location: "Downtown District, City Center",
    price: "$850,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    parking: 1,
    yearBuilt: 2023,
    description: "Experience urban luxury in this stunning 2-bedroom loft featuring floor-to-ceiling windows, premium finishes, and breathtaking city views. Located in the heart of downtown with easy access to dining, shopping, and entertainment.",
    features: [
      "Floor-to-ceiling windows",
      "Hardwood floors throughout",
      "Stainless steel appliances", 
      "In-unit washer/dryer",
      "Private balcony",
      "Building gym and rooftop deck",
      "24/7 concierge service",
      "Pet-friendly building"
    ],
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    floorPlans: [
      {
        name: "Layout A",
        sqft: 1200,
        ceilingHeight: "10 ft",
        image: "https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        name: "Layout B", 
        sqft: 1350,
        ceilingHeight: "12 ft",
        image: "https://images.pexels.com/photos/3288104/pexels-photo-3288104.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => prev === 0 ? project.images.length - 1 : prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your interest! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const sectionButtons = [
    { key: 'images', label: 'Gallery', icon: Image },
    { key: 'video', label: 'Virtual Tour', icon: Play },
    { key: 'floorplan', label: 'Floor Plans', icon: Layout }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="bg-black/20 backdrop-blur-sm py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
              </motion.div>
              <span className="group-hover:underline">Back to Projects</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="h-12 w-12 text-blue-400" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {project.title}
            </motion.h1>
            
            <div className="flex items-center justify-center text-gray-300 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <MapPin className="h-5 w-5 mr-2" />
              </motion.div>
              <span className="text-lg">{project.location}</span>
            </div>
            
            <motion.div 
              className="text-3xl font-bold text-white"
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {project.price}
            </motion.div>
          </motion.div>

          {/* Property Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-12 border border-white/10"
          >
            {[
              { icon: Bed, value: project.bedrooms, label: 'Bedrooms' },
              { icon: Bath, value: project.bathrooms, label: 'Bathrooms' },
              { icon: Square, value: project.sqft, label: 'Sq Ft' },
              { icon: Car, value: project.parking, label: 'Parking' },
              { icon: Calendar, value: project.yearBuilt, label: 'Built' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8 + index, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400 group-hover:text-purple-400 transition-colors" />
                </motion.div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Selection */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {sectionButtons.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.button
                  key={section.key}
                  onClick={() => setSelectedSection(section.key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedSection === section.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-black/30 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-black/50 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={selectedSection === section.key ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                  </motion.div>
                  {section.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {selectedSection === 'images' && (
              <motion.div
                key="images"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Thumbnail Gallery */}
                  <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                      {project.images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`relative h-20 lg:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                            index === currentImage ? 'ring-2 ring-blue-400 shadow-lg' : 'opacity-70 hover:opacity-100'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {index === currentImage && (
                            <motion.div
                              className="absolute inset-0 bg-blue-400/20"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Main Image */}
                  <div className="lg:col-span-3 order-1 lg:order-2 relative h-96 md:h-[600px] rounded-lg overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        src={project.images[currentImage]}
                        alt={`${project.title} - Image ${currentImage + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </motion.button>
                    
                    <motion.button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </motion.button>

                    {/* Auto-slide indicator */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {currentImage + 1} / {project.images.length}
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImage ? 'bg-white' : 'bg-white/50'
                          }`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedSection === 'video' && (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.h2 
                  className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(147, 51, 234, 0.5)',
                      '0 0 10px rgba(59, 130, 246, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Virtual Tour Experience
                </motion.h2>
                
                <motion.div 
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    controls
                    className="w-full h-96 md:h-[600px] object-cover"
                    poster={project.images[0]}
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </motion.div>
              </motion.div>
            )}

            {selectedSection === 'floorplan' && (
              <motion.div
                key="floorplan"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(147, 51, 234, 0.5)',
                      '0 0 10px rgba(59, 130, 246, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Interactive Floor Plans
                </motion.h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Floor Plan Selection */}
                  <div className="space-y-4">
                    {project.floorPlans.map((plan, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedFloorPlan(index)}
                        className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                          selectedFloorPlan === index
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg'
                            : 'bg-black/30 backdrop-blur-sm text-white border-white/20 hover:border-white/40'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="font-bold text-lg mb-2 flex items-center">
                          <motion.div
                            animate={selectedFloorPlan === index ? { rotate: 360 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mr-2"
                          >
                            <Zap className="h-5 w-5" />
                          </motion.div>
                          {plan.name}
                        </h3>
                        <div className="space-y-1 text-sm opacity-90">
                          <div>Square Feet: {plan.sqft}</div>
                          <div>Ceiling Height: {plan.ceilingHeight}</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Floor Plan Display */}
                  <div className="lg:col-span-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedFloorPlan}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4 }}
                        className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                      >
                        <motion.img
                          src={project.floorPlans[selectedFloorPlan].image}
                          alt={project.floorPlans[selectedFloorPlan].name}
                          className="w-full h-96 object-cover rounded-lg shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="mt-4">
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {project.floorPlans[selectedFloorPlan].name}
                          </h3>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                            <div>
                              <strong>Total Area:</strong> {project.floorPlans[selectedFloorPlan].sqft} sq ft
                            </div>
                            <div>
                              <strong>Ceiling Height:</strong> {project.floorPlans[selectedFloorPlan].ceilingHeight}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Description & Contact Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                About This Property
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </motion.div>
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-white flex items-center"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <Zap className="h-6 w-6 text-blue-400" />
                </motion.div>
                Request More Information
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' }
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200 backdrop-blur-sm"
                      placeholder={field.placeholder}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white transition-all duration-200 backdrop-blur-sm"
                    placeholder="Tell us about your interest in this property..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 30px rgba(147, 51, 234, 0.3)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Send Message
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 mb-4">Or contact us directly:</p>
                <div className="space-y-2">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-300">(555) 123-4567</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-300">hello@GD RealStatees.com</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;