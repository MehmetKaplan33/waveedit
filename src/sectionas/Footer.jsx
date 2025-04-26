import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-s1 py-20 max-md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between items-start gap-10 max-md:gap-8">
          <div className="max-w-xs">
            <div className="text-p1 font-bold text-2xl mb-6">WaveEdit</div>
            <p className="body-3 opacity-80 mb-8">
              Speed up your content production and enhance its quality with our AI-powered video editing solution.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="size-10 flex items-center justify-center rounded-full bg-s2 hover:bg-s3 transition-colors duration-300"
                >
                  <svg 
                    className="w-5 h-5 text-p4 fill-current"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{ __html: link.icon }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-16 max-md:gap-10">
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="base-bold text-p4 mb-6">{column.title}</h4>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url}
                        className="base text-p5/80 hover:text-p3 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-s3/20 flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center">
          <p className="small-compact opacity-60">
            © {new Date().getFullYear()} WaveEdit. All rights reserved.
          </p>
          <div className="flex gap-6 max-md:gap-4">
            <a href="#" className="small-compact text-p5/60 hover:text-p3 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="small-compact text-p5/60 hover:text-p3 transition-colors duration-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  { 
    name: "Twitter", 
    url: "#",
    icon: '<path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/>'
  },
  { 
    name: "Instagram", 
    url: "#",
    icon: '<path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>'
  },
  { 
    name: "YouTube", 
    url: "#",
    icon: '<path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12s0 3.95-.5 5.85a3.02 3.02 0 0 1-2.12 2.15c-1.8.49-8.75.5-9.34.5-.59 0-7.54-.02-9.34-.5a3.02 3.02 0 0 1-2.12-2.15C0 15.95 0 12 0 12s0-3.95.5-5.85a3.02 3.02 0 0 1 2.12-2.15c1.8-.49 8.75-.5 9.34-.5zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/>'
  },
  { 
    name: "LinkedIn", 
    url: "#",
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  }
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "User Guide", url: "#" },
      { label: "FAQ", url: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Contact", url: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", url: "#" },
      { label: "Community", url: "#" },
      { label: "Tutorials", url: "#" },
      { label: "Technical Support", url: "#" }
    ]
  }
];

export default Footer;