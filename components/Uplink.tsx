
import React, { useState } from 'react';

const Uplink: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real integration would use Formspree/Mailchimp here
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full border-2 border-[#00e6e6] flex items-center justify-center animate-pulse">
           <svg className="w-8 h-8 text-[#00e6e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-['Orbitron'] text-[#00e6e6] text-xl tracking-widest">UPLINK SUCCESSFUL</h3>
        <p className="text-xs text-white/40">COMMUNICATION_LOGGED_AND_ENCRYPTED.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[10px] text-[#ff9900] hover:underline"
        >
          RE-ESTABLISH_CONNECTION
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#ff9900] text-[10px] tracking-widest">
           <div className="w-2 h-2 bg-[#ff9900] animate-ping" />
           ESTABLISHING_ENCRYPTED_UPLINK...
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] text-[#00e6e6]/60">IDENTIFIER</label>
              <input 
                required
                type="text" 
                placeholder="USER_NAME"
                className="w-full bg-black/40 border border-[#00e6e6]/30 p-3 text-sm focus:border-[#00e6e6] outline-none transition-colors font-['Share_Tech_Mono'] uppercase"
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-[#00e6e6]/60">COMMS_ADDRESS</label>
              <input 
                required
                type="email" 
                placeholder="EMAIL@PROTO.COL"
                className="w-full bg-black/40 border border-[#00e6e6]/30 p-3 text-sm focus:border-[#00e6e6] outline-none transition-colors font-['Share_Tech_Mono'] uppercase"
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-[#00e6e6]/60">PAYLOAD_MESSAGE</label>
            <textarea 
              required
              rows={4}
              placeholder="ENTER_DATA..."
              className="w-full bg-black/40 border border-[#00e6e6]/30 p-3 text-sm focus:border-[#00e6e6] outline-none transition-colors font-['Share_Tech_Mono'] uppercase resize-none"
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full h-12 border border-[#00e6e6] text-[#00e6e6] font-['Orbitron'] text-xs tracking-[0.4em] hover:bg-[#00e6e6] hover:text-black transition-all duration-300 pulse-glow"
          >
            INITIATE_UPLINK
          </button>
        </form>
      </div>

      <div className="border-t border-[#00e6e6]/10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-[10px] text-white/30">NEO-ARCHITECT PORTFOLIO v2.5 // SECURE_SOCKET</div>
           <div className="flex gap-6">
             {['TWITTER', 'ARTSTATION', 'LINKEDIN', 'TELEGRAM'].map(social => (
               <a key={social} href="#" className="text-[10px] text-[#ff9900] hover:text-white transition-colors tracking-widest">{social}</a>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Uplink;
