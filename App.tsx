
import React, { useState, useEffect, useCallback } from 'react';
import { Page, TerminalMessage } from './types';
import Navigation from './components/Navigation';
import HUDPanel from './components/HUDPanel';
import CLI from './components/CLI';
import AIAssistant from './components/AIAssistant';
import Background from './components/Background';
import Vault from './components/Vault';
import Lab from './components/Lab';
import Capabilities from './components/Capabilities';
import Uplink from './components/Uplink';
import Operator from './components/Operator';
import Market from './components/Market';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.VAULT);
  const [messages, setMessages] = useState<TerminalMessage[]>([
    { type: 'system', content: 'NEO-OS v2.5.0 INITIALIZED...' },
    { type: 'system', content: 'SECURE LINK ESTABLISHED.' }
  ]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleCommand = useCallback((cmd: string) => {
    const command = cmd.toLowerCase().trim();
    setMessages(prev => [...prev, { type: 'user', content: command }]);

    if (command === 'help') {
      setMessages(prev => [...prev, { type: 'system', content: 'AVAILABLE MODULES: /vault, /lab, /capabilities, /operator, /market, /uplink' }]);
    } else if (command.startsWith('/')) {
      const target = command.substring(1);
      const foundPage = Object.values(Page).find(p => p.toLowerCase().includes(target));
      if (foundPage) {
        setCurrentPage(foundPage as Page);
        setMessages(prev => [...prev, { type: 'system', content: `REDIRECTING TO ${foundPage}...` }]);
      } else {
        setMessages(prev => [...prev, { type: 'system', content: `MODULE '${target}' NOT FOUND.` }]);
      }
    } else {
      // Default to AI query if not a system command
      setMessages(prev => [...prev, { type: 'system', content: 'PROCESSING QUERY VIA NEURAL ENTITY...' }]);
    }
  }, []);

  const toggleWallet = () => setIsWalletConnected(!isWalletConnected);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col select-none">
      <Background />
      
      {/* Top Bar HUD */}
      <header className="z-40 h-16 flex items-center justify-between px-6 border-b border-[#00e6e6]/20 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-[#00e6e6] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#00e6e6] animate-pulse rounded-full shadow-[0_0_10px_#00e6e6]" />
          </div>
          <h1 className="font-['Orbitron'] text-lg tracking-[0.2em] text-[#00e6e6] hidden md:block">
            NEO-ARCHITECT <span className="text-white/40">OF</span> REALITY
          </h1>
        </div>

        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

        <button 
          onClick={toggleWallet}
          className={`font-['Orbitron'] text-xs px-4 py-2 border transition-all duration-300 pulse-glow ${
            isWalletConnected ? 'border-[#ff9900] text-[#ff9900]' : 'border-[#00e6e6] text-[#00e6e6]'
          } rounded-sm tracking-widest`}
        >
          {isWalletConnected ? 'CONNECTED' : 'CONNECT WALLET'}
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-10 overflow-hidden">
        {/* Floating AI Assistant (Always present but positioned relative to HUD) */}
        <div className="absolute right-4 bottom-24 z-30 md:static md:mr-10">
          <AIAssistant lastUserMessage={messages[messages.length - 1]?.content} onAIResponse={(res) => setMessages(prev => [...prev, { type: 'ai', content: res }])} />
        </div>

        <HUDPanel title={currentPage}>
          {currentPage === Page.VAULT && <Vault />}
          {currentPage === Page.LAB && <Lab />}
          {currentPage === Page.CAPABILITIES && <Capabilities />}
          {currentPage === Page.OPERATOR && <Operator />}
          {currentPage === Page.MARKET && <Market />}
          {currentPage === Page.UPLINK && <Uplink />}
        </HUDPanel>
      </main>

      {/* Bottom CLI Bar */}
      <footer className="z-40 h-16 glass-panel border-t border-[#00e6e6]/30 px-4 flex items-center">
        <CLI messages={messages} onCommand={handleCommand} />
      </footer>
    </div>
  );
};

export default App;
