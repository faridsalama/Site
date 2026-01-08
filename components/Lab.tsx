
import React from 'react';

const Lab: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square glass-panel border border-[#00e6e6]/30 overflow-hidden flex items-center justify-center group">
           {/* Wireframe Grid Visualization */}
           <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,230,230,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,230,230,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
           <img 
            src="https://picsum.photos/seed/topology/600/600" 
            alt="Topology Study" 
            className="z-10 w-4/5 h-4/5 object-cover grayscale brightness-200 contrast-150 mix-blend-screen group-hover:scale-110 transition-transform duration-1000" 
           />
           <div className="absolute top-4 left-4 text-[10px] text-[#00e6e6] tracking-[0.3em]">GEOMETRIC_ANALYSIS</div>
           <div className="absolute bottom-4 right-4 text-[8px] text-[#ff9900]/60 text-right">
             VERTEX_COUNT: 4,501,220<br/>
             FACE_TYPE: QUAD_DOMINANT<br/>
             OPTIMIZATION: 98.4%
           </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-['Orbitron'] text-xl text-[#00e6e6] tracking-widest">ORGANIC TOPOLOGY RESEARCH</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Every mesh is meticulously crafted to support multi-level subdivision and anatomical accuracy. Our laboratory focuses on the intersection of biological realism and digital efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 glass-panel border-l-2 border-[#ff9900]">
              <div className="text-[10px] text-[#ff9900] mb-1">RETOPOLOGY</div>
              <div className="text-xs text-white/80">Clean edge flows for fluid medical animation.</div>
            </div>
            <div className="p-4 glass-panel border-l-2 border-[#00e6e6]">
              <div className="text-[10px] text-[#00e6e6] mb-1">UV_MAPPING</div>
              <div className="text-xs text-white/80">Seamless 8K texture projection for MR.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00e6e6]/10 pt-10">
        <h3 className="font-['Orbitron'] text-center text-[#00e6e6] text-xs tracking-[0.5em] mb-8">PRINTING_PROTOCOLS</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="glass-panel p-4 flex flex-col items-center text-center group cursor-help hover:border-[#ff9900]/40 transition-colors">
              <div className="w-12 h-12 border border-[#00e6e6]/20 flex items-center justify-center mb-3 group-hover:animate-pulse">
                <span className="text-xs text-[#00e6e6]">P-{i}</span>
              </div>
              <div className="text-[10px] text-white/60">SLA_PRECISION_{i}</div>
              <div className="text-[8px] text-[#ff9900]/40 mt-1">STATUS: STABLE</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lab;
