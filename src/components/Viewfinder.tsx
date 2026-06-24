import React from "react";

interface ViewfinderProps {
  borderColor?: string;
  size?: string;
  padding?: string;
}

export default function Viewfinder({
  borderColor = "border-[#C8A96E]",
  size = "w-4 h-4",
  padding = "p-0"
}: ViewfinderProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${padding}`}>
      {/* Top Left */}
      <div className={`absolute top-2 left-2 ${size} border-t-2 border-l-2 ${borderColor}`} id="vf-tl" />
      {/* Top Right */}
      <div className={`absolute top-2 right-2 ${size} border-t-2 border-r-2 ${borderColor}`} id="vf-tr" />
      {/* Bottom Left */}
      <div className={`absolute bottom-2 left-2 ${size} border-b-2 border-l-2 ${borderColor}`} id="vf-bl" />
      {/* Bottom Right */}
      <div className={`absolute bottom-2 right-2 ${size} border-b-2 border-r-2 ${borderColor}`} id="vf-br" />
    </div>
  );
}
