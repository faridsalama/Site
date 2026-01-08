
import React, { useEffect, useState } from 'react';
import { queryAIAssistant } from '../services/geminiService';

interface AIAssistantProps {
  lastUserMessage?: string;
  onAIResponse: (res: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lastUserMessage, onAIResponse }) => {
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (lastUserMessage && !lastUserMessage.startsWith('/') && lastUserMessage !== 'help') {
      const handleQuery = async () => {
        setIsThinking(true);
        const response = await queryAIAssistant(lastUserMessage);
        onAIResponse(response);
        setIsThinking(false);
      };
      handleQuery();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUserMessage]);

  return (
    <div className="relative group cursor-pointer">
      {/* Holographic Sphere */}
      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#00e6e6]/40 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 ${isThinking ? 'animate-spin-slow' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00e6e6]/20 to-transparent rounded-full animate-pulse" />
        
        {/* Core Visual */}
        <div className="z-10 w-12 h-12 md:w-16 md:h-16 rounded-full glass-panel border border-[#00e6e6] flex items-center justify-center overflow-hidden">
          <img 
            src="https://picsum.photos/seed/cyber/200/200" 
            alt="AI Core" 
            className="w-full h-full object-cover grayscale brightness-150 contrast-125 mix-blend-screen opacity-70" 
          />
        </div>

        {/* Orbiting Elements */}
        <div className="absolute top-0 w-full h-full animate-[spin_10s_linear_infinite]">
          <div className="w-2 h-2 bg-[#ff9900] rounded-full absolute -top-1 left-1/2 shadow-[0_0_10px_#ff9900]" />
        </div>
        <div className="absolute top-0 w-full h-full animate-[spin_15s_linear_infinite_reverse]">
          <div className="w-1 h-1 bg-[#00e6e6] rounded-full absolute -bottom-1 left-1/2 shadow-[0_0_10px_#00e6e6]" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-full mt-2 w-full text-center">
        <span className="text-[8px] font-['Orbitron'] text-[#00e6e6] tracking-[0.2em] uppercase">
          {isThinking ? 'THINKING...' : 'NEURAL_ENTITY'}
        </span>
      </div>
    </div>
  );
};

export default AIAssistant;
