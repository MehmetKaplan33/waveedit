import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer, icon, category }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getCategoryColor = (category) => {
        switch (category) {
            case 'technical':
                return 'bg-blue-50 text-blue-600';
            case 'pricing':
                return 'bg-green-50 text-green-600';
            case 'support':
                return 'bg-purple-50 text-purple-600';
            case 'general':
                return 'bg-gray-50 text-gray-600';
            default:
                return 'bg-blue-50 text-blue-600';
        }
    };

    return (
        <motion.div 
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <button
                className="flex items-center justify-between w-full p-6 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <span className="text-2xl select-none">{icon}</span>
                    <span className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{question}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(category)} capitalize`}>
                        {category}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
                    >
                        <span className="text-xl leading-none">+</span>
                    </motion.div>
                </div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-100"
                    >
                        <div className="p-6 pt-4 text-gray-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FaqItem;
