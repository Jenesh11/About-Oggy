import React, { useState, useEffect } from 'react';
import htm from 'htm';
import { MessageSquare } from 'lucide-react';

const html = htm.bind(React.createElement);

export const About = () => {
  const fullText = "I’m a BBA BIA student passionate about website development and I love gaming.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 40); // Typewriter speed
    return () => clearInterval(intervalId);
  }, []);

  return html`
    <div className="w-full max-w-3xl mx-auto mt-12">
        <div className="relative bg-blue-600 rounded-t-lg p-2 border-x-4 border-t-4 border-slate-800 flex items-center justify-between">
            <span className="font-pixel text-white font-bold tracking-widest px-2">QUEST INFO</span>
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-slate-800"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-slate-800"></div>
            </div>
        </div>
        <div className="bg-white border-4 border-slate-800 rounded-b-xl p-6 md:p-10 shadow-[8px_8px_0_0_rgba(30,41,59,0.3)] relative">
            <!-- Triangle Indicator for Speech Bubble -->
            <div className="absolute -top-4 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-slate-800"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex flex-col items-center gap-2 min-w-[100px]">
                     <div className="w-20 h-20 bg-slate-200 rounded-lg border-2 border-slate-800 flex items-center justify-center">
                        <${MessageSquare} size=${32} className="text-slate-500" />
                     </div>
                     <span className="font-pixel text-xs text-slate-500">NPC: Jenesh</span>
                </div>
                
                <div className="flex-1">
                    <p className="font-pixel text-2xl md:text-3xl leading-relaxed text-slate-800">
                        ${displayedText}
                        <span className="animate-pulse inline-block w-3 h-6 bg-slate-800 align-middle ml-1"></span>
                    </p>
                    <p className="font-pixel text-sm md:text-base text-slate-500 mt-4 italic flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full border border-slate-400"></span>
                        People also know me as <span className="font-bold text-blue-600 not-italic">Oggy</span>.
                    </p>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                 <button className="font-pixel text-slate-500 hover:text-blue-600 animate-bounce">
                    Press Start to Continue ▼
                 </button>
            </div>
        </div>
    </div>
  `;
};