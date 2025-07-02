
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Team at Halogen Technologies" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">About Halogen Technologies</h2>
            <p className="text-lg text-slate-400 mb-6">
              Founded in Kigali, Halogen Technologies is more than just a software company. We are a team of passionate innovators, designers, and engineers dedicated to leveraging technology to build a brighter future for businesses in Rwanda and beyond.
            </p>
            <p className="text-lg text-slate-400 mb-6">
              Our mission is to bridge the gap between great ideas and market-ready products. We combine local insights with global technology standards to deliver digital solutions that are not only world-class in quality but also contextually relevant and impactful.
            </p>
            <div className="mt-8 border-l-4 border-cyan-500 pl-6">
              <p className="text-xl font-semibold text-white italic">
                "We believe in the power of technology to create opportunity, drive progress, and empower communities. That's the core of everything we build."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
