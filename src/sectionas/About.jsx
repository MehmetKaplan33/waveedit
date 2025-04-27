import React from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";

const About = () => {
  return (
    <section id="about" className="relative py-28 max-md:py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <Element name="about">
        <div className="container">
          <motion.div 
            className="relative z-2 text-center mx-auto max-w-3xl mb-16 max-md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-md:mb-4">
              Meet WaveEdit
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Founded in 2023, WaveEdit is an innovative platform that integrates AI technologies into video editing processes to simplify the lives of content creators.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index} 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 border border-gray-100 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center text-blue-600 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      dangerouslySetInnerHTML={{ __html: card.icon }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button 
              primary
              containerClassName="hover:scale-105 transition-transform duration-300"
            >
              Learn More
              <svg className="ml-2 inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
              </svg>
            </Button>
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

const aboutCards = [
  {
    icon: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    title: "AI Technology",
    description: "Using the latest artificial intelligence technologies to transform your videos into professional-looking content in seconds."
  },
  {
    icon: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm12 0a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zm12 0a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z" />',
    title: "Professional Results",
    description: "Achieve professional results with automatic color correction, audio enhancement, and transition effects."
  },
  {
    icon: '<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /><path d="M13 7h-2v6h6v-2h-4z" />',
    title: "Time Saving",
    description: "Complete editing tasks that would take hours in just minutes, allowing you to dedicate more time to creating content."
  },
];

export default About;