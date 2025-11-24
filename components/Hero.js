import React from 'react';
import htm from 'htm';
import { OggyAvatar } from './OggyAvatar.js';

const html = htm.bind(React.createElement);

export const Hero = () => {
  return html`
    <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center relative">
      
      <!-- Interactive Avatar Section -->
      <div className="relative z-20 mb-6">
        <${OggyAvatar} />
      </div>
      
      <!-- Name Plate -->
      <div className="bg-white border-4 border-slate-800 rounded-xl px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transform -rotate-1 relative z-20 hover:rotate-0 transition-transform duration-300">
        <h1 className="font-pixel text-4xl md:text-6xl text-slate-800 mb-2">Jenesh Patel</h1>
        <div className="h-1 w-full bg-slate-200 rounded-full my-2">
            <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-lg md:text-xl font-bold text-slate-600 flex items-center justify-center gap-2">
           <span>BBA BIA Student</span> • <span>Web Dev</span> • <span>Gamer</span>
        </p>
      </div>

    </div>
  `;
};