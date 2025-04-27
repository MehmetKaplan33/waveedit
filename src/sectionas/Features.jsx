import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";
import Button from "../components/Button";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-32 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] translate-x-1/3" />
      </div>

      <Element name="features">
        <div className="container relative">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simplify Your Video Editing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Achieve professional quality videos in minutes with WaveEdit's
              powerful features.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          dangerouslySetInnerHTML={{ __html: feature.icon }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2 + index * 0.1 },
                      }}
                    >
                      <Button
                        containerClassName="transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center"
                        primary
                      >
                        <span className="flex items-center">
                          Learn More
                          <svg
                            className="ml-2 w-5 h-5 inline-block"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              primary
              containerClassName="hover:scale-105 transition-transform duration-300 flex items-center"
            >
              <span className="flex items-center">
                Explore All Features
                <svg
                  className="ml-2 w-5 h-5 inline-block"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

const features = [
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />',
    title: "Automated Editing",
    description:
      "Let AI handle the tedious parts of video editing. Our smart algorithms analyze your footage and suggest the best cuts, transitions, and effects.",
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />',
    title: "Audio Enhancement",
    description:
      "Reduce background noise, balance audio levels, and automatically enhance sound quality for crystal clear audio in your videos.",
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 9h16.5m-16.5 6.75h16.5" />',
    title: "Smart Subtitles",
    description:
      "Automatically generate accurate subtitles in multiple languages. Perfect for reaching a global audience and improving accessibility.",
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />',
    title: "Special Effects",
    description:
      "Access a vast library of modern transitions and effects that can be applied with a single click. Make your videos stand out.",
  },
];

export default Features;
