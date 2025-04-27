import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setHasScrolled(position > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const menuItems = [
    { title: "about", label: "About" },
    { title: "features", label: "Features" },
    { title: "pricing", label: "Pricing" }, 
    { title: "faq", label: "FAQ" },
    { title: "download", label: "Download" }
  ];

  const closeMenu = () => {
    setIsOpen(false);
    // Restore scroll position when menu is closed
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        hasScrolled 
          ? "py-2 bg-white/90 backdrop-blur-lg shadow-sm" 
          : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-14 md:h-16 relative">
          {/* Logo */}
          <LinkScroll
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            offset={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            className="relative z-50 flex items-center space-x-2 cursor-pointer"
            onClick={closeMenu}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg rotate-3 opacity-70" />
              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
                <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-blue-600" : hasScrolled ? "text-blue-600" : "text-blue-600"}`}>W</span>
              </div>
            </div>
            <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-gray-900" : hasScrolled ? "text-gray-900" : "text-gray-900"}`}>WaveEdit</span>
          </LinkScroll>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.title}
                to={item.title}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                activeClass="text-blue-600"
              >
                {item.label}
              </LinkScroll>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
              Try Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              isOpen ? "text-gray-900" : hasScrolled ? "text-gray-900" : "text-gray-900"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 block origin-center ${
                  isOpen ? "bg-current" : "bg-current"
                }`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -16 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 block ${
                  isOpen ? "bg-current" : "bg-current"
                }`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 block origin-center ${
                  isOpen ? "bg-current" : "bg-current"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                  onClick={closeMenu}
                  style={{ top: `${scrollPosition}px` }}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 200,
                  }}
                  className="fixed right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
                  style={{ 
                    top: `${scrollPosition}px`,
                    height: '100vh',
                    maxHeight: '100vh'
                  }}
                >
                  <div className="flex flex-col min-h-screen">
                    <div className="flex-1 p-6">
                      {/* Mobile Menu Items */}
                      <div className="flex flex-col space-y-6 mt-8">
                        {menuItems.map((item) => (
                          <LinkScroll
                            key={item.title}
                            to={item.title}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-20}
                            delay={100}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            className="text-gray-800 hover:text-blue-600 font-medium text-lg transition-colors duration-200 w-full"
                            activeClass="text-blue-600"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </LinkScroll>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-100">
                      <button 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                        onClick={closeMenu}
                      >
                        Try Free
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;
