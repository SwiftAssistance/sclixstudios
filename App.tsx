import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { Phone } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      {/* Mobile Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} md:hidden px-4 flex justify-between items-center`}>
         <div className="font-bold text-navy text-xl">Scalix.</div>
         <a href="tel:01234567890" className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform">
            <Phone size={16} />
            <span>Call Now</span>
         </a>
      </div>

      {/* Desktop Sticky Nav (Minimal) */}
      <nav className={`hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-10 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="text-2xl font-extrabold text-navy tracking-tight">Scalix.</div>
        <div className="flex items-center gap-8">
           <a href="#services" className="font-medium text-navy hover:text-navy-light transition-colors">Services</a>
           <a href="#results" className="font-medium text-navy hover:text-navy-light transition-colors">Results</a>
           <div className="text-navy font-bold flex items-center gap-2">
              <Phone size={18} />
              01234 567890
           </div>
        </div>
      </nav>

      <Hero />
      <Services />
      <Results />
      <Contact />
      
      <footer className="bg-navy text-white py-12 px-6 md:px-20 text-center md:text-left border-t border-navy-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Scalix Studios</h3>
            <p className="text-gray-300">Windsor's premier trade marketing agency.</p>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Scalix Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;