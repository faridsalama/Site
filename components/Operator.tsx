
import React from 'react';

const Operator: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="w-full md:w-1/3 relative group">
        <div className="aspect-square glass-panel border border-[#00e6e6]/30 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/operator/400/400" 
            alt="The Operator" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 glass-panel border border-[#ff9900]/40 p-4 text-center">
           <div className="text-[8px] text-[#ff9900] uppercase">LEVEL_9_OPERATOR</div>
           <div className="text-xs text-white">BIO-MECH ARCHITECT</div>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <h3 className="font-['Orbitron'] text-3xl text-[#00e6e6] tracking-widest">THE_OPERATOR</h3>
        <p className="text-sm text-white/60 leading-relaxed italic">
          "Reality is merely raw data. I am the interface that renders it tangible."
        </p>
        <div className="space-y-4 text-sm text-white/80">
          <p>
            An artist living at the intersection of medical science and cybernetic fantasy. Specializing in high-precision anatomical modeling, AR/MR development, and the creation of digital identities for the Tech-Noir future.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="border-l-2 border-[#00e6e6] pl-4">
                <div className="text-[10px] text-[#00e6e6]">EXPERTISE</div>
                <div className="text-xs">ZBRUSH, MAYA, UNREAL ENGINE 5, MEDICAL IMAGING</div>
             </div>
             <div className="border-l-2 border-[#ff9900] pl-4">
                <div className="text-[10px] text-[#ff9900]">MISSION</div>
                <div className="text-xs">BRIDGING BIO-SCIENCE AND DIGITAL IMMERSION</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
