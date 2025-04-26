import React from 'react';

const Badge = ({ children, className }) => {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${className || 'bg-blue-50 text-blue-700 ring-blue-200'}`}>
      {children}
    </span>
  );
};

export default Badge; 