
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'CYBER-SKELETON PROTOTYPE',
    category: 'MEDICAL ANATOMY',
    description: 'High-fidelity skeletal reconstruction with integrated neural pathways.',
    imageUrl: 'https://picsum.photos/seed/med1/400/600',
    stats: { topology: 'Sub-D', polys: '1.2M', renderTime: '0.5h' }
  },
  {
    id: '2',
    title: 'BIO-MECHANIC HEART',
    category: 'CARDIOVASCULAR',
    description: 'A 3D printed functional model for heart transplant simulation.',
    imageUrl: 'https://picsum.photos/seed/med2/400/600',
    stats: { topology: 'Quads', polys: '850K', renderTime: '0.3h' }
  },
  {
    id: '3',
    title: 'NEURAL UPLINK V4',
    category: 'AUGMENTATION',
    description: 'Visualizing cortical implants in a Tech-Noir environment.',
    imageUrl: 'https://picsum.photos/seed/cyber1/400/600',
    stats: { topology: 'Organic', polys: '2.5M', renderTime: '1.2h' }
  },
  {
    id: '4',
    title: 'RETINAL OVERLAY 01',
    category: 'OPTICAL HUD',
    description: 'MR solution for surgeons to see internal data during operations.',
    imageUrl: 'https://picsum.photos/seed/cyber2/400/600',
    stats: { topology: 'Technical', polys: '400K', renderTime: '0.1h' }
  }
];

const Vault: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="group relative glass-panel rounded-sm overflow-hidden border border-[#00e6e6]/10 hover:border-[#00e6e6]/60 transition-all duration-500 cursor-pointer">
          <div className="aspect-[2/3] overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 p-4 bg-black/80 backdrop-blur-sm border-t border-[#00e6e6]/20">
            <span className="text-[8px] text-[#ff9900] tracking-widest">{project.category}</span>
            <h3 className="text-xs font-['Orbitron'] text-white mt-1">{project.title}</h3>
            
            <div className="mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="flex gap-2">
                 <div className="text-[8px] border border-[#00e6e6]/40 px-1 text-[#00e6e6]">{project.stats?.topology}</div>
                 <div className="text-[8px] border border-[#00e6e6]/40 px-1 text-[#00e6e6]">{project.stats?.polys}</div>
               </div>
               <button className="text-[8px] text-[#00e6e6] uppercase hover:underline">ACCESS_DATA</button>
            </div>
          </div>

          <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-[#00e6e6]/40 transition-colors" />
        </div>
      ))}
    </div>
  );
};

export default Vault;
