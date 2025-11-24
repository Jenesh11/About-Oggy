import React from 'react';
import htm from 'htm';
import { ExternalLink, Gamepad2 } from 'lucide-react';

const html = htm.bind(React.createElement);

const projects = [
  {
    id: 1,
    title: 'SkyBuddy',
    category: 'Weather Application',
    description: 'A feature-rich weather app providing real-time forecasts, Air Quality Index (AQI) monitoring, and interactive weather graphs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    url: 'https://skybuddy.oggyspace.xyz/'
  },
  {
    id: 2,
    title: 'FinSight',
    category: 'Finance Dashboard',
    description: 'A comprehensive finance analytics and insights dashboard for visualizing market data and personal finance trends.',
    tech: ['Next.js', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    url: 'https://finsight.oggyspace.xyz/'
  },
  {
    id: 3,
    title: 'Heaven Properties',
    category: 'Real Estate Platform',
    description: 'A real-estate listing directory allowing users to browse properties with detailed descriptions and pricing.',
    tech: ['React', 'CSS', 'Sanity', 'JSON Data'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    url: 'https://heavenproperties.oggyspace.xyz/'
  }
];

const getTechBadgeStyle = (tech) => {
  const normalized = tech.toLowerCase();
  
  if (normalized.includes('html')) return 'bg-orange-500 text-white';
  if (normalized.includes('css')) return 'bg-blue-600 text-white';
  if (normalized.includes('javascript')) return 'bg-yellow-400 text-slate-900';
  if (normalized.includes('react')) return 'bg-cyan-400 text-slate-900';
  if (normalized.includes('next')) return 'bg-slate-900 text-white';
  if (normalized.includes('tailwind')) return 'bg-sky-500 text-white';
  if (normalized.includes('sanity')) return 'bg-rose-500 text-white';
  if (normalized.includes('json')) return 'bg-violet-500 text-white';
  
  return 'bg-slate-600 text-white'; 
};

export const Projects = () => {
  return html`
    <div className="mt-16">
        <div className="text-center mb-10">
            <h2 className="font-pixel text-4xl text-slate-800 inline-block bg-yellow-300 px-6 py-2 border-4 border-slate-800 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transform -rotate-2">
                Level Select
            </h2>
            <p className="mt-4 font-pixel text-slate-600 text-lg">Choose a mission to explore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${projects.map((project) => html`
                <a 
                    key=${project.id}
                    href=${project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-xl border-4 border-slate-800 overflow-hidden relative shadow-[8px_8px_0_0_rgba(30,41,59,0.2)] hover:shadow-[12px_12px_0_0_rgba(30,41,59,0.3)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                    <!-- Header Bar styled like a game window -->
                    <div className="bg-slate-800 p-2 flex justify-between items-center">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-600"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-600"></div>
                        </div>
                        <span className="font-pixel text-white text-xs uppercase tracking-wider opacity-70">
                            WORLD ${project.id}-1
                        </span>
                    </div>

                    <!-- Image Area -->
                    <div className="h-40 bg-slate-200 border-b-4 border-slate-800 relative overflow-hidden group">
                        <img 
                            src=${project.image} 
                            alt=${project.title} 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                             <div className="bg-white border-2 border-slate-800 rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
                                <${ExternalLink} className="w-6 h-6 text-slate-800" />
                             </div>
                        </div>
                    </div>

                    <!-- Content Area -->
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-2xl text-slate-800 font-pixel group-hover:text-blue-600 transition-colors">
                                ${project.title}
                            </h3>
                            <div className="bg-slate-100 p-1.5 rounded border-2 border-slate-200 group-hover:border-blue-400 group-hover:bg-blue-50 transition-colors">
                                <${Gamepad2} className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                            </div>
                        </div>
                        
                        <div className="mb-4 flex-1">
                            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-300 mb-2">
                                ${project.category}
                            </span>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                ${project.description}
                            </p>
                        </div>
                        
                        <!-- Footer / Tech Stack -->
                        <div className="mt-auto pt-4 border-t-2 border-dashed border-slate-200">
                            <div className="flex flex-wrap gap-2">
                                ${project.tech.map((t) => html`
                                    <span 
                                        key=${t} 
                                        className=${`text-xs font-pixel uppercase px-2 py-1 border-2 border-slate-900 shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform cursor-default ${getTechBadgeStyle(t)}`}
                                    >
                                        ${t}
                                    </span>
                                `)}
                            </div>
                        </div>
                    </div>

                    <!-- 'Press Start' Badge on Hover -->
                    <div className="absolute bottom-4 right-4 bg-green-500 text-white font-pixel text-xs px-2 py-1 rounded border-2 border-green-700 shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-10">
                        PRESS START ►
                    </div>
                </a>
            `)}
        </div>
    </div>
  `;
};