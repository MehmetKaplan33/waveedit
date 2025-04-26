import React from "react";

const TestimonialItem = ({ name, role, avatar, comment }) => {
  return (
    <div className="bg-s2 rounded-2xl p-6 transition-all duration-300 hover:bg-s3 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="size-14 rounded-full object-cover"
        />
        <div>
          <h4 className="base-bold text-p4">{name}</h4>
          <p className="small-1 text-p5/80">{role}</p>
        </div>
      </div>
      <p className="body-3 text-p5/90">{comment}</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            className="w-4 h-4 mr-1 text-p3 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialItem;