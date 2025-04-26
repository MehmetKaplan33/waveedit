import React from "react";
import { Element } from "react-scroll";
import TestimonialItem from "../components/TestimonialItem";

const Testimonials = () => {
  return (
    <section className="relative py-28 max-md:py-20">
      <Element name="testimonials">
        <div className="container relative z-2">
          <div className="text-center mb-16 max-md:mb-10">
            <div className="caption small-2 uppercase text-p3">
              User Experiences
            </div>
            <h2 className="h3 text-p4 mb-6 max-md:mb-4">
              What Our Users Say
            </h2>
            <p className="body-1 max-w-xl mx-auto">
              Discover how WaveEdit is transforming the workflows of content creators and professionals.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                comment={testimonial.comment}
              />
            ))}
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
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%233B82F6' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "Thanks to WaveEdit, my video production process has been cut in half. The AI-powered editing feature is truly a lifesaver!"
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Specialist",
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%232563EB' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "The quality of video content we prepare for our clients has reached a whole new level with WaveEdit. Highly recommended."
  },
  {
    name: "Emily Davis",
    role: "Social Media Content Creator",
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%2360A5FA' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "Both fast and user-friendly interface. I now do all my video editing work with WaveEdit."
  },
  {
    name: "Alex Martin",
    role: "Film Producer",
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%231E40AF' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "Professional level color correction and audio enhancement features are excellent. Our post-production process has become much more efficient."
  },
  {
    name: "Jessica Klein",
    role: "Education Consultant",
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%2393C5FD' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "The automatic subtitle feature of WaveEdit provides great convenience for the videos we prepare for our online courses."
  },
  {
    name: "Robert Wilson",
    role: "Brand Manager",
    avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3e%3ccircle fill='%230F172A' cx='50' cy='50' r='50'/%3e%3ccircle fill='%23EFF6FF' cx='50' cy='40' r='12'/%3e%3cpath fill='%23EFF6FF' d='M50 55c-15 0-27 7-27 16v9h54v-9c0-9-12-16-27-16z'/%3e%3c/svg%3e",
    comment: "We now prepare our company's promotional videos much faster and more professionally. WaveEdit really makes a difference."
  }
];

export default Testimonials;