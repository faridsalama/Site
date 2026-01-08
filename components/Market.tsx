
import React from 'react';

const assets = [
  { name: 'NEURAL_NODE_V1', price: '0.05 ETH', type: 'GLB/FBX' },
  { name: 'SKELETON_HD_KIT', price: '0.12 ETH', type: 'ZPR/OBJ' },
  { name: 'AR_SURGERY_HUD', price: '0.08 ETH', type: 'UNITY_PKG' },
  { name: 'CYBER_SKIN_SHADERS', price: '0.03 ETH', type: 'UE5_ASSET' }
];

const Market: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-['Orbitron'] text-xl text-[#00e6e6] tracking-widest">DIGITAL_ASSET_REPOSITORY</h3>
          <p className="text-[10px] text-white/40 mt-1 uppercase">CURATED_ASSETS_FOR_CYBERNETIC_DEVELOPMENT</p>
        </div>
        <div className="text-[10px] text-[#ff9900] border border-[#ff9900]/20 px-4 py-1">TOTAL_VOLUME: 42.5 ETH</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {assets.map((asset, idx) => (
          <div key={idx} className="glass-panel p-4 flex flex-col justify-between border-b border-[#00e6e6]/20 group hover:border-[#00e6e6] transition-all">
            <div className="aspect-square bg-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00e6e6]/5" />
               <span className="text-[10px] text-[#00e6e6]/40 font-['Orbitron']">PREVIEW_NOT_FOUND</span>
            </div>
            <div>
              <div className="text-[8px] text-[#ff9900] mb-1">{asset.type}</div>
              <div className="text-xs font-['Orbitron'] text-white truncate">{asset.name}</div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-[#00e6e6]">{asset.price}</span>
                <button className="text-[10px] bg-[#00e6e6]/10 text-[#00e6e6] px-3 py-1 border border-[#00e6e6]/20 hover:bg-[#00e6e6] hover:text-black transition-colors">ACQUIRE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 glass-panel border border-[#ff9900]/20 text-center">
         <span className="text-[10px] text-[#ff9900] tracking-[0.2em]">COMMERCIAL_LICENSING_AVAILABLE_UPON_UPLINK</span>
      </div>
    </div>
  );
};

export default Market;
