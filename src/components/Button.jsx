import clsx from "clsx";
import React from "react";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  primary = true,
  secondary = false,
  outline = false,
}) => {
  // Daha modern ve şık bir buton iç içeriği
  const Inner = () => {
    const baseStyle = "relative flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out";
    
    let buttonStyle = baseStyle;
    
    if (primary) {
      buttonStyle += " bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1";
    } else if (secondary) {
      buttonStyle += " bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:shadow-lg hover:shadow-gray-600/20 hover:-translate-y-1";
    } else if (outline) {
      buttonStyle += " bg-transparent border border-blue-400 text-blue-600 hover:bg-blue-50 hover:border-blue-600";
    }
    
    return (
      <span className={buttonStyle}>
        {icon && (
          typeof icon === 'string' && icon.startsWith('/') ? (
            <img
              src={icon}
              alt="icon"
              className="w-5 h-5 mr-2 object-contain"
            />
          ) : (
            <div
              className="w-5 h-5 mr-2 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          )
        )}
        <span>{children}</span>
        
        {/* Şık efekt için overlay eklendi */}
        <span className="absolute inset-0 rounded-lg overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        </span>
      </span>
    );
  };
  
  // Bağlantı veya buton olarak dönüş
  return href ? (
    <a
      className={clsx("inline-block", containerClassName)}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("inline-block", containerClassName)}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;