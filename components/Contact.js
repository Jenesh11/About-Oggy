import React from 'react';
import htm from 'htm';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const html = htm.bind(React.createElement);

export const Contact = () => {
  return html`
    <div className="mt-20 mb-20 relative">
        <!-- Ground Line -->
        <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-12 bg-green-500 border-t-4 border-green-700"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-center gap-10">
            
            <!-- Mailbox Pole -->
            <div className="hidden md:block absolute bottom-0 left-1/4 w-4 h-32 bg-slate-700"></div>

            <!-- Mailbox Container -->
            <div className="w-full max-w-lg bg-red-500 rounded-t-[50px] rounded-b-lg border-4 border-slate-800 p-8 shadow-xl relative transform md:-rotate-2 hover:rotate-0 transition-transform origin-bottom-left">
                <!-- Flag -->
                <div className="absolute top-10 -right-4 w-4 h-24 bg-yellow-400 border-2 border-slate-800 origin-bottom transform rotate-45 z-0">
                    <div className="absolute top-0 right-0 w-12 h-8 bg-yellow-400 border-2 border-slate-800 rounded-r-md"></div>
                </div>

                <!-- Opening -->
                <div className="bg-slate-900/20 rounded-t-[40px] p-6 mb-4">
                    <h2 className="font-pixel text-3xl text-white text-center drop-shadow-md">Contact Me</h2>
                </div>

                <div className="bg-white border-2 border-slate-800 rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200 group-hover:scale-110 transition-transform">
                            <${Phone} className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Phone</p>
                            <p className="font-bold text-slate-800">708-715-3468</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-200 group-hover:scale-110 transition-transform">
                            <${Mail} className="text-orange-600 w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                            <a href="mailto:jeneshpatel22@gmail.com" className="font-bold text-slate-800 hover:text-blue-600 transition-colors">
                                jeneshpatel22@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="border-t-2 border-dashed border-slate-200 pt-4 mt-4 flex justify-center gap-6">
                         <!-- Social Placeholders -->
                         <a href="#" className="text-slate-400 hover:text-slate-800 hover:scale-125 transition-all">
                            <${Github} size=${24} />
                         </a>
                         <a href="#" className="text-slate-400 hover:text-blue-600 hover:scale-125 transition-all">
                            <${Linkedin} size=${24} />
                         </a>
                         <a href="#" className="text-slate-400 hover:text-sky-400 hover:scale-125 transition-all">
                            <${Twitter} size=${24} />
                         </a>
                    </div>
                </div>
            </div>
            
            <!-- Decor: Bush -->
            <div className="w-24 h-16 bg-green-600 rounded-t-full border-4 border-green-800 relative z-20"></div>
        </div>
    </div>
  `;
};