
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1280?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Building Digital Futures <br /> from the Heart of <span className="text-cyan-400">Rwanda</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          We craft bespoke web and mobile applications that solve real-world problems, empower businesses, and drive growth with cutting-edge technology.
        </p>
        <a href="#services" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 inline-block">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
