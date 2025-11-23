import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Cloud } from 'lucide-react';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 text-white/40 animate-float">
            <Cloud size={64} fill="white" />
        </div>
        <div className="absolute top-24 right-20 text-white/30 animate-float-delayed">
            <Cloud size={96} fill="white" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-white/20 animate-float" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <Cloud size={48} fill="white" />
        </div>
        {/* Distant mountains/islands could go here */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-24">
        <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="bg-white border-b-4 border-r-4 border-slate-800 rounded-xl px-4 py-2 pointer-events-auto shadow-lg transform hover:-translate-y-1 transition-transform cursor-pointer">
                    <span className="font-pixel text-2xl font-bold text-slate-800">JP</span>
                </div>
                <div className="bg-slate-800 text-white font-pixel px-3 py-1 rounded-full border-2 border-white pointer-events-auto">
                    LVL: 21
                </div>
            </div>
        </header>

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
            <About />
        </section>

        <section id="projects">
            <Projects />
        </section>

        <section id="skills">
            <Skills />
        </section>

        <section id="contact">
            <Contact />
        </section>

        <footer className="text-center py-10 font-pixel text-slate-600">
            <p>© 2024 Jenesh Patel. Game Over.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
