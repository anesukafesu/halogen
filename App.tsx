
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Portfolio';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
