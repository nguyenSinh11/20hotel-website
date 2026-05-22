import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-opacity duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-luxury-ivory focus:ring-luxury-burgundy';
  
  const variants = {
    primary: 'bg-luxury-burgundy text-luxury-ivory hover:opacity-90',
    outline: 'border border-luxury-brass text-luxury-emerald hover:bg-luxury-brass/10',
    ghost: 'text-luxury-emerald hover:bg-luxury-emerald/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const size = props.size || 'md';

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
