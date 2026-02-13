
import React from "react";
import playIcon from "../../assets/playIcon.svg";
const LiveStream = ({ text = "Livestream", className = "", textClassName = "" }) => {
  return (
    <div className="relative">
    <div className={` flex items-center justify-center rounded-[16px]  bg-lightGray ${className}`}>
      <img src={playIcon} alt="Play Icon" className="absolute w-12 h-12 opacity-75" />
      <span className={`absolute top-[-8px] left-2 text-[11px] font-bold text-white rounded-[6px] px-2 bg-[#333333] ${textClassName}`}>{text}</span>
    </div>
    </div>
  );
};

export default LiveStream;
