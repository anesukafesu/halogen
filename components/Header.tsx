
import React, { useState, useEffect } from 'react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg height="32" width="32" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2zM5 8.09l7-3.89 7 3.89v5.82l-7 3.89-7-3.89V8.09z" fill="url(#logoGradient)" opacity="0.4"/>
      <path d="M9 9v6h2v-2.5h2V15h2V9h-2v2.5h-2V9H9z" fill="url(#logoGradient)" />
    </svg>
    <span className="font-bold text-xl text-white">Halogen</span>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#products', label: 'Products' },
    { href: '/#about', label: 'About Us' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" aria-label="Homepage">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 hover:scale-105">
              Get a Quote
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 mt-4">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
