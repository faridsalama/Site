
import React, { useState, useRef, useEffect } from 'react';
import { TerminalMessage } from '../types';

interface CLIProps {
  messages: TerminalMessage[];
  onCommand: (cmd: string) => void;
}

const CLI: React.FC<CLIProps> = ({ messages, onCommand }) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div className="w-full flex items-center gap-4 h-full">
      <div 
        ref={scrollRef}
        className="flex-1 h-full flex flex-col gap-1 overflow-y-auto text-[10px] text-[#00e6e6]/60 p-2 scrollbar-hide"
      >
        {messages.slice(-5).map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.type === 'ai' ? 'text-[#ff9900]' : ''}`}>
            <span className="opacity-40">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
            <span className="uppercase">{m.type}:</span>
            <span className="text-white/80">{m.content}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="w-1/3 flex items-center gap-2 border-l border-[#00e6e6]/20 pl-4 h-8">
        <span className="text-[#00e6e6] animate-pulse">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ENTER COMMAND..."
          className="bg-transparent border-none outline-none text-[#00e6e6] font-['Share_Tech_Mono'] text-sm w-full placeholder:text-[#00e6e6]/20 uppercase"
        />
        <button type="submit" className="text-[#00e6e6]/40 hover:text-[#00e6e6] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
        </button>
      </form>
    </div>
  );
};

export default CLI;
