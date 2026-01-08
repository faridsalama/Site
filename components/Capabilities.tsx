
import React from 'react';

const services = [
  {
    title: "MEDICAL VISUALIZATION",
    desc: "Photorealistic rendering of surgical procedures and anatomical structures for education.",
    icon: "BIO"
  },
  {
    title: "AR/MR DEPLOYMENT",
    desc: "Integration of 3D medical assets into real-world environments via Mixed Reality.",
    icon: "AUG"
  },
  {
    title: "CUSTOM CYBERNETICS",
    desc: "Bespoke 3D character design for futuristic branding and Tech-Noir projects.",
    icon: "CYB"
  },
  {
    title: "DIGITAL TWINS",
    desc: "Creating precise virtual replicas of physical equipment for simulation training.",
    icon: "TWN"
  }
];

const Capabilities: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((s, idx) => (
        <div key={idx} className="glass-panel p-6 border-l-4 border-[#00e6e6] group hover:bg-[#00e6e6]/5 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-['Orbitron'] text-lg text-white group-hover:text-[#00e6e6] transition-colors">{s.title}</h3>
            <span className="text-[10px] text-[#ff9900] border border-[#ff9900]/20 px-2 py-0.5">{s.icon}</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
          <div className="mt-6 flex gap-1 h-1">
            <div className="flex-1 bg-[#00e6e6]/20 overflow-hidden">
               <div className="h-full bg-[#00e6e6] w-0 group-hover:w-full transition-all duration-700 delay-100" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Capabilities;
