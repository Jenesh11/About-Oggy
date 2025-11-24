import React, { useState } from 'react';
import htm from 'htm';
import { Gamepad2 } from 'lucide-react';

const html = htm.bind(React.createElement);

export const OggyAvatar = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isJumping) return;
    
    // Trigger jump animation
    setIsJumping(true);
    setClicked(true);
    
    // Reset jump state after animation duration
    setTimeout(() => setIsJumping(false), 400);
    
    // Reset message after a few seconds
    setTimeout(() => setClicked(false), 3000);
  };

  return html`
    <div className="relative group cursor-pointer inline-block" onClick=${handleClick}>
      <!-- Floating Island Base Effect (Behind) -->
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-4 w-32 h-8 bg-black/20 rounded-[100%] blur-sm animate-pulse"></div>

      <!-- Speech Bubble -->
      <div 
        className=${`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border-4 border-slate-900 px-4 py-2 rounded-xl whitespace-nowrap z-30 transition-all duration-300 pointer-events-none
        ${clicked || (!isJumping && 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-2')}`}
        style=${{ opacity: clicked ? 1 : undefined }}
      >
        <p className="font-pixel text-slate-800 text-lg md:text-xl leading-none pt-1">
          ${clicked ? "Hey! I’m Oggy 👋" : "People also know me as Oggy!"}
        </p>
        <!-- Pixel Triangle for Speech Bubble -->
        <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-slate-900"></div>
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
      </div>

      <!-- Avatar Container -->
      <div className=${`relative z-20 transition-transform duration-300 ${isJumping ? 'animate-jump' : 'animate-float group-hover:paused'}`}>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-[0_0_0_4px_rgba(30,41,59,1)] overflow-hidden bg-yellow-100 relative">
          <img 
            src="/avatar.png" 
            alt="Oggy Avatar" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError=${(e) => {
                const target = e.currentTarget;
                if (target.src.includes('avatar.png')) {
                    target.src = "/profile.jpg";
                } else if (!target.src.includes('Gemini')) {
                    target.src = "https://i.ibb.co/W4L97tpD/Gemini-Generated-Image-ga04daga04daga04.png";
                }
            }}
          />
          
          <!-- Shine Effect on Hover -->
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

        <!-- Status Badge (attached to avatar) -->
        <div className="absolute bottom-2 right-4 bg-green-500 border-2 border-slate-800 rounded-full p-2 animate-bounce shadow-md">
            <${Gamepad2} className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  `;
};