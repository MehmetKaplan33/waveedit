import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "../components/Button";

function Hero() {
  const videoRef = useRef(null);

  const text = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section className="relative h-fit w-full sm:h-[80vh] flex justify-center items-center pt-14 pb-28">
      <div className="absolute top-0 -z-10 h-full w-full bg-light-pattern" />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-16">
        <motion.div
          className="flex flex-1 flex-col gap-6 text-center lg:text-left"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-p1"
            variants={text}
          >
            XORA: AI Video Editing
          </motion.h1>
          <motion.p className="text-xl font-light text-gray-700" variants={text}>
            Professional video editing is now accessible to everyone.
            Create stunning videos in seconds with our AI-powered tools.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-5 justify-center lg:justify-start"
            variants={text}
          >
            <Button
              href="#"
              containerClassName="w-auto"
              primary
              icon={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
              </svg>`}
            >
              TRY NOW
            </Button>
            <Button
              href="#about"
              containerClassName="w-auto"
              outline
              icon={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
              </svg>`}
            >
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
            <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* Main Background */}
              <rect width="600" height="400" rx="20" fill="#F8FAFC" />
              
              {/* App Header */}
              <rect y="0" width="600" height="60" rx="20" fill="#F1F5F9" />
              <rect x="20" y="20" width="120" height="20" rx="5" fill="#3B82F6" />
              <rect x="460" y="15" width="30" height="30" rx="15" fill="#60A5FA" />
              <rect x="500" y="15" width="30" height="30" rx="15" fill="#60A5FA" />
              <rect x="540" y="15" width="30" height="30" rx="15" fill="#60A5FA" />
              
              {/* Sidebar */}
              <rect x="0" y="60" width="150" height="340" fill="#F1F5F9" />
              <rect x="20" y="80" width="110" height="10" rx="5" fill="#E2E8F0" />
              <rect x="20" y="100" width="110" height="10" rx="5" fill="#E2E8F0" />
              <rect x="20" y="140" width="110" height="10" rx="5" fill="#60A5FA" />
              <rect x="20" y="180" width="110" height="10" rx="5" fill="#E2E8F0" />
              <rect x="20" y="220" width="110" height="10" rx="5" fill="#E2E8F0" />
              <rect x="20" y="260" width="110" height="10" rx="5" fill="#E2E8F0" />
              
              {/* Main Content Area */}
              <rect x="170" y="80" width="410" height="200" rx="10" fill="#E2E8F0" />
              
              {/* Timeline */}
              <rect x="170" y="300" width="410" height="80" rx="10" fill="#E2E8F0" />
              <rect x="190" y="320" width="60" height="40" rx="5" fill="#3B82F6" />
              <rect x="270" y="320" width="80" height="40" rx="5" fill="#60A5FA" />
              <rect x="370" y="320" width="70" height="40" rx="5" fill="#3B82F6" />
              <rect x="460" y="320" width="100" height="40" rx="5" fill="#60A5FA" />
              
              {/* Video Content */}
              <circle cx="375" cy="180" r="60" fill="#3B82F6" fillOpacity="0.2" />
              <path d="M350 150L350 210L410 180L350 150Z" fill="#3B82F6" />
              
              {/* Timeline Marker */}
              <rect x="270" y="290" width="4" height="100" fill="#3B82F6" />
              <circle cx="272" cy="290" r="8" fill="#3B82F6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
