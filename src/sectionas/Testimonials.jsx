import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import TestimonialItem from "../components/TestimonialItem";
import { motion } from "framer-motion";
import { fadeInUp } from "../constants/animations";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const currentOffset = useRef(0);

  // Responsive ayarları güncelle
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesPerView(1);      // Mobile
      else if (width < 1024) setSlidesPerView(2); // Tablet
      else setSlidesPerView(3);                   // Desktop
    };

    const updateSlideWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.parentElement.offsetWidth;
        // Padding ve gap değerlerini hesaba kat
        const totalGap = (slidesPerView - 1) * 32; // gap-8 = 2rem = 32px
        const availableWidth = containerWidth - totalGap;
        setSlideWidth(availableWidth / slidesPerView);
      }
    };

    updateSlidesPerView();
    updateSlideWidth();

    window.addEventListener('resize', () => {
      updateSlidesPerView();
      updateSlideWidth();
    });

    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [slidesPerView]);

  // Otomatik kaydırma
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isDragging]);

  const maxSlides = Math.max(0, testimonials.length - slidesPerView);

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    currentOffset.current = -activeIndex * slideWidth;
    
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    dragCurrentX.current = currentX;
    
    const diff = dragCurrentX.current - dragStartX.current;
    const newOffset = currentOffset.current + diff;
    
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${newOffset}px)`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = dragCurrentX.current - dragStartX.current;
    const threshold = slideWidth / 4;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIndex > 0) {
        prevSlide();
      } else if (diff < 0 && activeIndex < maxSlides) {
        nextSlide();
      }
    }
    
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.transform = `translateX(${-activeIndex * slideWidth}px)`;
    }
  };

  const nextSlide = () => {
    setActiveIndex(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-28 max-md:py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <Element name="testimonials">
        <div className="container relative z-2">
          <motion.div 
            className="text-center mb-16 max-md:mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              User Experiences
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how WaveEdit is transforming the workflows of content creators and professionals worldwide.
            </p>
          </motion.div>

          <div className="relative max-w-[1200px] mx-auto">
            <div 
              className="overflow-hidden px-4 md:px-6"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <motion.div
                ref={containerRef}
                className="flex gap-8 cursor-grab active:cursor-grabbing transition-none"
                style={{
                  x: -activeIndex * slideWidth,
                  transition: isDragging ? 'none' : 'transform 0.5s ease-out',
                  width: `${(testimonials.length * (slideWidth + 32)) - 32}px`
                }}
                animate={{ x: -activeIndex * (slideWidth + 32) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${slideWidth}px` }}
                  >
                    <TestimonialItem
                      name={testimonial.name}
                      role={testimonial.role}
                      avatar={testimonial.avatar}
                      comment={testimonial.comment}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(maxSlides + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "w-8 bg-blue-600" 
                      : "w-2.5 bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 p-3 rounded-full bg-white shadow-lg text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 ${
                activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              } max-lg:hidden`}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 p-3 rounded-full bg-white shadow-lg text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 ${
                activeIndex === maxSlides ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              } max-lg:hidden`}
              disabled={activeIndex === maxSlides}
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Element>
    </section>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "YouTuber",
    avatar: "/images/testimonials/jessica-saunders.png",
    comment: "Thanks to WaveEdit, my video production process has been cut in half. The AI-powered editing feature is truly a lifesaver!"
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Specialist",
    avatar: "/images/testimonials/mark-erixon.png",
    comment: "The quality of video content we prepare for our clients has reached a whole new level with WaveEdit. Highly recommended."
  },
  {
    name: "Emily Davis",
    role: "Social Media Content Creator",
    avatar: "/images/testimonials/alicia-barker.png",
    comment: "Both fast and user-friendly interface. I now do all my video editing work with WaveEdit."
  },
  {
    name: "Alex Martin",
    role: "Film Producer",
    avatar: "/images/testimonials/jim-bradley.png",
    comment: "Professional level color correction and audio enhancement features are excellent. Our post-production process has become much more efficient."
  },
  {
    name: "Jessica Klein",
    role: "Education Consultant",
    avatar: "/images/testimonials/becky-snider.png",
    comment: "The automatic subtitle feature of WaveEdit provides great convenience for the videos we prepare for our online courses."
  },
  {
    name: "Robert Wilson",
    role: "Brand Manager",
    avatar: "/images/testimonials/melanie-hurst.png",
    comment: "We now prepare our company's promotional videos much faster and more professionally. WaveEdit really makes a difference."
  }
];

export default Testimonials;