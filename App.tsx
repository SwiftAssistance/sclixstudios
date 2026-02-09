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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Mobile sticky header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden px-4 flex justify-between items-center ${
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
        role="banner"
      >
        <a href="#main-content" className="font-bold text-navy text-xl" aria-label="Scalix Studios — back to top">
          Scalix.
        </a>
        <a
          href="tel:01234567890"
          className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={16} aria-hidden="true" />
          <span>Call Now</span>
        </a>
      </header>

      {/* Desktop sticky nav */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-10 py-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#main-content" className="text-2xl font-extrabold text-navy tracking-tight" aria-label="Scalix Studios — back to top">
          Scalix.
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#services"
            className="font-medium text-navy hover:text-navy-light transition-colors"
          >
            Services
          </a>
          <a
            href="#results"
            className="font-medium text-navy hover:text-navy-light transition-colors"
          >
            Results
          </a>
          <a
            href="#contact"
            className="font-medium text-navy hover:text-navy-light transition-colors"
          >
            Contact
          </a>
          <a
            href="tel:01234567890"
            className="text-navy font-bold flex items-center gap-2 hover:text-navy-light transition-colors"
            aria-label="Call us on 01234 567 890"
          >
            <Phone size={18} aria-hidden="true" />
            01234 567 890
          </a>
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>

      <footer
        className="bg-navy text-white py-12 px-6 md:px-20 border-t border-navy-light"
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="text-2xl font-bold mb-1">Scalix Studios</p>
            <p className="text-slate-300">
              Marketing for tradesmen in Windsor &amp; the Thames Valley.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <nav aria-label="Footer navigation" className="flex gap-6 text-sm text-slate-300">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Scalix Studios. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
