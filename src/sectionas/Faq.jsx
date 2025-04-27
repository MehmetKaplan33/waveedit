import { useState, useEffect, useMemo } from "react";
import { Element } from "react-scroll";
import FaqItem from "../components/FaqItem.jsx";
import Badge from "../components/Badge.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";

// FAQ verilerini bileşen dışında tanımlıyoruz
const faqData = [
    {
      id: 1,
      category: "general",
      question: "What is WaveEdit AI Video Editor?",
      answer: "WaveEdit is an advanced AI-powered video editing platform that automates the editing process. It uses artificial intelligence to help you create professional-quality videos quickly and easily, without requiring extensive editing experience.",
      icon: "✨"
    },
    {
      id: 2,
      category: "technical",
      question: "How does the AI video editing work?",
      answer: "Our AI analyzes your video content and automatically suggests edits, transitions, and effects based on industry best practices. You can then customize these suggestions or let the AI handle everything automatically.",
      icon: "🤖"
    },
    {
      id: 3,
      category: "technical",
      question: "What video formats are supported?",
      answer: "WaveEdit supports all major video formats including MP4, MOV, AVI, and MKV. You can upload videos in any resolution up to 8K, depending on your subscription plan.",
      icon: "📹"
    },
    {
      id: 4,
      category: "technical",
      question: "Is there a limit on video length?",
      answer: "Video length limits vary by plan. Free users can edit videos up to 5 minutes, Premium users up to 30 minutes, and Team plan users have no length restrictions.",
      icon: "⏱️"
    },
    {
      id: 5,
      category: "pricing",
      question: "Can I try WaveEdit before subscribing?",
      answer: "Yes! You can start with our Free plan to explore WaveEdit's features. This includes access to basic editing tools, templates, and the ability to create up to 5 projects per month.",
      icon: "🎯"
    },
    {
      id: 6,
      category: "technical",
      question: "How secure is my content?",
      answer: "We take security seriously. All uploads are encrypted, and your content is stored securely in our cloud infrastructure. We never share or use your content for any purpose other than providing our service.",
      icon: "🔒"
    },
    {
      id: 7,
      category: "support",
      question: "Do you offer customer support?",
      answer: "Yes! We provide 24/7 customer support through live chat, email, and our comprehensive knowledge base. Premium and Team plan users also get priority support with faster response times.",
      icon: "💬"
    },
    {
      id: 8,
      category: "general",
      question: "Can I collaborate with my team?",
      answer: "Absolutely! Our Team plan allows for seamless collaboration. Share projects, leave comments, and work together in real-time. Perfect for agencies and content creation teams.",
      icon: "👥"
    }
];

const categories = [
    { id: "all", label: "All Questions", color: "blue" },
    { id: "general", label: "General", color: "gray" },
    { id: "technical", label: "Technical", color: "blue" },
    { id: "pricing", label: "Pricing", color: "green" },
    { id: "support", label: "Support", color: "purple" }
];

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtreleme mantığını useMemo ile optimize ediyoruz
    const filteredFaqs = useMemo(() => {
        return faqData.filter(faq => {
            const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
            const matchesSearch = !searchQuery || 
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const getCategoryCount = (categoryId) => {
        if (categoryId === "all") return faqData.length;
        return faqData.filter(faq => faq.category === categoryId).length;
    };

    const getCategoryColor = (categoryId, isActive) => {
        const category = categories.find(c => c.id === categoryId);
        if (isActive) {
            switch (category?.color) {
                case 'blue': return 'bg-blue-600 text-white shadow-blue-500/25';
                case 'green': return 'bg-green-600 text-white shadow-green-500/25';
                case 'purple': return 'bg-purple-600 text-white shadow-purple-500/25';
                case 'gray': return 'bg-gray-600 text-white shadow-gray-500/25';
                default: return 'bg-blue-600 text-white shadow-blue-500/25';
            }
        }
        
        switch (category?.color) {
            case 'blue': return 'bg-blue-50 text-blue-600 hover:bg-blue-100';
            case 'green': return 'bg-green-50 text-green-600 hover:bg-green-100';
            case 'purple': return 'bg-purple-50 text-purple-600 hover:bg-purple-100';
            case 'gray': return 'bg-gray-50 text-gray-600 hover:bg-gray-100';
            default: return 'bg-blue-50 text-blue-600 hover:bg-blue-100';
        }
    };

    return (
        <Element name="faq" className="relative">
            <section id="faq" className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
                </div>
                
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-blue-50 text-blue-700">FAQ</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                            Find answers to common questions about WaveEdit's AI video editing platform.
                            Can't find what you're looking for? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</a>.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                                    className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 shadow-sm"
                                />
                                <div className={`absolute right-6 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${searchQuery ? 'opacity-100' : 'opacity-60'}`}>
                                    {searchQuery ? (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        getCategoryColor(category.id, activeCategory === category.id)
                                    } ${
                                        activeCategory === category.id ? 'scale-105 shadow-lg' : 'hover:scale-105'
                                    }`}
                                >
                                    {category.label}
                                    <span className={`ml-2 ${activeCategory === category.id ? 'opacity-80' : 'opacity-60'}`}>
                                        ({getCategoryCount(category.id)})
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeCategory + searchQuery}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10"
                            variants={staggerContainer}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((item) => (
                                    <motion.div 
                                        key={item.id} 
                                        variants={fadeInUp}
                                        layout
                                    >
                                        <FaqItem {...item} />
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div 
                                    className="col-span-2 text-center py-12"
                                    variants={fadeInUp}
                                >
                                    <p className="text-gray-500 text-lg">No questions found matching your search.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Additional Support Section */}
                    <motion.div 
                        className="mt-16 text-center"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                            <p className="text-gray-600 mb-6">
                                Our team is here to help! Get in touch with us for personalized assistance.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Contact Support
                                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <a 
                                    href="#" 
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                                >
                                    View Documentation
                                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Element>
    );
};

export default Faq;
