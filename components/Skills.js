import React from 'react';
import htm from 'htm';
import { 
  Zap, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Braces, 
  Cpu, 
  FileCode, 
  Flame, 
  Table, 
  PenTool, 
  GitBranch, 
  Globe, 
  Wind,
  Layers
} from 'lucide-react';

const html = htm.bind(React.createElement);

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "bg-blue-500",
    borderColor: "border-blue-700",
    skills: [
      { name: 'HTML', icon: Layout, level: 95 },
      { name: 'CSS', icon: Braces, level: 90 },
      { name: 'JavaScript', icon: Zap, level: 85 },
      { name: 'React', icon: Code2, level: 85 },
      { name: 'Next.js', icon: Cpu, level: 80 },
      { name: 'TypeScript', icon: FileCode, level: 75 },
    ]
  },
  {
    title: "Databases",
    color: "bg-green-500",
    borderColor: "border-green-700",
    skills: [
        { name: 'MongoDB', icon: Database, level: 80 },
        { name: 'Firebase', icon: Flame, level: 75 },
        { name: 'MySQL', icon: Table, level: 70 },
    ]
  },
  {
    title: "Backend & Tools",
    color: "bg-orange-500",
    borderColor: "border-orange-700",
    skills: [
        { name: 'Node.js', icon: Server, level: 75 },
        { name: 'Sanity CMS', icon: PenTool, level: 80 },
        { name: 'Supabase', icon: Layers, level: 70 },
        { name: 'Git / GitHub', icon: GitBranch, level: 85 },
        { name: 'API Integration', icon: Globe, level: 90 },
        { name: 'TailwindCSS', icon: Wind, level: 95 },
    ]
  }
];

export const Skills = () => {
  return html`
    <div className="mt-16 bg-slate-800 rounded-2xl p-4 md:p-8 border-4 border-slate-900 shadow-2xl relative">
        <!-- Pixel screws in corners -->
        <div className="absolute top-3 left-3 w-3 h-3 bg-slate-600 rounded-full shadow-inner border border-slate-900"></div>
        <div className="absolute top-3 right-3 w-3 h-3 bg-slate-600 rounded-full shadow-inner border border-slate-900"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 bg-slate-600 rounded-full shadow-inner border border-slate-900"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 bg-slate-600 rounded-full shadow-inner border border-slate-900"></div>

        <div className="text-center mb-10">
            <h2 className="font-pixel text-3xl md:text-4xl text-white inline-block border-b-4 border-dashed border-slate-600 pb-2">
                Inventory & Skills
            </h2>
            <p className="text-slate-400 font-pixel mt-2 text-lg">Equipped Technologies</p>
        </div>

        <div className="space-y-12">
            ${skillCategories.map((category) => html`
                <div key=${category.title} className="relative">
                    <!-- Category Header Badge -->
                    <div className=${`absolute -top-5 left-4 md:left-8 ${category.color} ${category.borderColor} border-b-4 text-white font-pixel font-bold px-4 py-1 rounded-t-lg shadow-md z-10 uppercase tracking-widest text-sm md:text-base`}>
                        ${category.title}
                    </div>

                    <!-- Category Container -->
                    <div className="bg-slate-700/50 rounded-xl border-2 border-slate-600 p-6 pt-8 md:p-8 md:pt-10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            ${category.skills.map((skill) => html`
                                <div key=${skill.name} className="bg-slate-800 rounded-lg p-3 border-2 border-slate-600 hover:border-white hover:bg-slate-700 transition-all duration-200 group flex flex-col items-center gap-3 text-center shadow-lg hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-blue-400 group-hover:text-blue-400 text-slate-400 transition-colors">
                                        <${skill.icon} size=${24} />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-white font-bold font-pixel text-sm tracking-wide mb-2">${skill.name}</h3>
                                        <!-- HP/Level Bar -->
                                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-950">
                                            <div 
                                                className=${`h-full ${category.color.replace('bg-', 'bg-')}-400 group-hover:brightness-125 transition-all duration-1000`} 
                                                style=${{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            `)}
                        </div>
                    </div>
                </div>
            `)}
        </div>
        
        <div className="mt-8 text-center bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p className="text-slate-400 font-mono text-xs md:text-sm">
                <span className="text-yellow-400 font-bold">TIP:</span> Combining these items unlocks special combos like "Full Stack Application".
            </p>
        </div>
    </div>
  `;
};