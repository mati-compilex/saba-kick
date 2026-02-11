import React from "react";

const MediaPlaceholder = ({ text = "LIVE SCREEN", className = "", textClassName = "" }) => {
  return (
    <div className={`relative flex items-center justify-center border border-[#797979] bg-[#f2f2f2] ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#797979" strokeWidth="1" />
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#797979" strokeWidth="1" />
      </svg>
      {text && (
        <span className={`relative z-10 bg-inherit text-dark text-center leading-normal font-montserrat ${textClassName}`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default MediaPlaceholder;
