import React from "react";
import { motion } from "framer-motion";

const TestimonialItem = ({ name, role, avatar, comment }) => {
  return (
    <motion.div 
      className="h-full relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100 group flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      
      {/* Quote Icon */}
      <div className="absolute -top-4 right-8">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Avatar and Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
              <img 
                src={avatar} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-white">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>

        {/* Comment */}
        <div className="flex-grow flex flex-col justify-between">
          <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4 lg:line-clamp-none">
            {comment}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-auto">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">5.0</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;