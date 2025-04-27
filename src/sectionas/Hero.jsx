import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeInUp, scaleIn } from "../constants/animations";

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-blue-100 blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-200 blur-3xl opacity-20" />
        <div className="absolute top-1/4 left-1/3 w-[200px] h-[200px] rounded-full bg-blue-300 blur-2xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4 md:mb-6">
                AI-Powered Video Editing
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4 md:mb-6 leading-tight"
              variants={fadeInUp}
            >
              Create stunning videos in seconds
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeInUp}
              custom={0.2}
            >
              Transform your raw footage into professional masterpieces with our AI-powered editing tools. No experience needed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12"
              variants={fadeInUp}
              custom={0.4}
            >
              <Button
                href="#"
                containerClassName="w-full sm:w-auto"
                primary
              >
                Start Editing Free
                <svg className="ml-2 inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </Button>
              <Button
                href="#"
                containerClassName="w-full sm:w-auto"
                secondary
              >
                Watch Demo
                <svg className="ml-2 inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="currentColor"/>
                </svg>
              </Button>
            </motion.div>

            {/* Features Pills */}
            <motion.div 
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={fadeInUp}
              custom={0.6}
            >
              {['4K Support', 'Auto Color Correction', 'Smart Transitions', 'Cloud Storage'].map((feature) => (
                <span 
                  key={feature} 
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 border border-gray-100 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Interface Preview */}
          <motion.div
            className="relative order-1 lg:order-2 -mx-4 sm:mx-0"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
              <div className="h-10 sm:h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="aspect-video bg-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-blue-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-500/40 flex items-center justify-center">
                      <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-3 sm:p-4 bg-white border-t border-gray-100">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <div className="w-16 sm:w-20 h-10 sm:h-12 rounded bg-blue-500 flex-shrink-0" />
                  <div className="w-16 sm:w-20 h-10 sm:h-12 rounded bg-blue-400 flex-shrink-0" />
                  <div className="w-16 sm:w-20 h-10 sm:h-12 rounded bg-blue-300 flex-shrink-0" />
                  <div className="w-16 sm:w-20 h-10 sm:h-12 rounded bg-gray-100 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute -right-8 top-1/3 w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full blur-2xl opacity-40" />
            <div className="absolute -left-4 bottom-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-blue-300 rounded-full blur-2xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
