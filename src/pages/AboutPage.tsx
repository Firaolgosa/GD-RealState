import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, MapPin, Clock } from 'lucide-react';

const AboutPage = () => {
  const whQuestions = [
    {
      question: "Who We Are",
      answer: "We're a passionate team of real estate professionals who believe finding your perfect space should be exciting, not stressful. Our diverse team brings together decades of local market knowledge with fresh, innovative approaches to property services.",
      icon: Users
    },
    {
      question: "What We Do",
      answer: "We help people find, buy, and sell properties that truly fit their lifestyle and budget. From first-time homebuyers to seasoned investors, we provide personalized guidance through every step of the real estate journey.",
      icon: Award
    },
    {
      question: "Why Choose Us",
      answer: "Because we genuinely care about your success. We take time to understand your unique needs, provide honest market insights, and work tirelessly to achieve the best outcomes. Your dreams become our mission.",
      icon: Heart
    },
    {
      question: "Where We Serve",
      answer: "Our expertise covers the greater metropolitan area, with deep knowledge of neighborhood trends, school districts, and local amenities. We know these communities inside and out because we live here too.",
      icon: MapPin
    },
    {
      question: "When We Started",
      answer: "Founded in 2015, we've grown from a small startup to a trusted name in local real estate. Our journey has been guided by one simple principle: treat every client like family, and success will follow.",
      icon: Clock
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to GD RealStatees
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're not just another real estate company. We're your neighbors, your advocates, and your partners in finding the perfect space to call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
              src="/images/GezuPhoto.jpg"
              alt="Our story"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  It all started with a simple frustration. The founders of GD RealStatees were tired of the impersonal, high-pressure tactics they experienced when buying their first homes. They knew there had to be a better way.
                </p>
                <p>
                  So they created one. A company that puts relationships first, profits second. Where every conversation starts with "How can we help?" instead of "What's your budget?"
                </p>
                <p>
                  Today, we've helped hundreds of families find their perfect spaces, and we're just getting started. Every success story motivates us to do better, be more helpful, and create even more positive experiences.
                </p>
                <p>
                  Because at the end of the day, we're not just selling properties – we're helping people start new chapters of their lives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WH Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Want to Know
            </h2>
            <p className="text-xl text-gray-600">
              The who, what, why, where, and when of GD RealStatees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whQuestions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 group-hover:bg-gray-900 rounded-lg p-3 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-gray-700 group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{item.question}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              The friendly faces behind GD RealStatees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Genzebe Dibaba",
                role: "Founder & Lead",
                image: "images/gezu.jpg",
                bio: "Sarah brings 12 years of real estate expertise and an infectious enthusiasm for helping people find their perfect homes."
              },
              {
                name: "Tujuba kena",
                role: "Ceo",
                image: "images/tuj.jpg",
                bio: "Michael's data-driven approach and local market knowledge help clients make informed decisions with confidence."
              },
              // {
              //   name: "Leul",
              //   role: "Client Relations",
              //   image: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=400",
              //   bio: "Emma ensures every client feels heard, valued, and supported throughout their entire real estate journey."
              // }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;