
import React from 'react';

interface HUDPanelProps {
  title: string;
  children: React.ReactNode;
}

const HUDPanel: React.FC<HUDPanelProps> = ({ title, children }) => {
  return (
    <div className="relative w-full max-w-5xl h-[70vh] glass-panel rounded-lg overflow-hidden flex flex-col shadow-2xl">
      {/* Decorative Technical Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00e6e6] z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff9900] z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff9900] z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00e6e6] z-10" />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#00e6e6]/20">
        <h2 className="font-['Orbitron'] text-[#00e6e6] text-xs tracking-[0.4em] uppercase">{title}</h2>
        <div className="flex gap-1">
          <div className="w-10 h-1 bg-[#00e6e6]/20" />
          <div className="w-4 h-1 bg-[#ff9900]/40" />
        </div>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 p-6 overflow-y-auto relative">
        {children}
      </div>
      
      {/* HUD Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default HUDPanel;
