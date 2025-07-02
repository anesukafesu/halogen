
import React from 'react';

const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);

const MobileDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);

const UiUxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
);

const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <WebDevIcon />,
    title: 'Web App Development',
    description: 'Creating powerful, scalable, and secure web applications tailored to your business needs, from complex dashboards to customer-facing platforms.',
  },
  {
    icon: <MobileDevIcon />,
    title: 'Mobile App Development',
    description: 'Building intuitive and high-performance native and cross-platform mobile apps for both iOS and Android to connect with your users on the go.',
  },
  {
    icon: <UiUxIcon />,
    title: 'UI/UX Design',
    description: 'Designing beautiful, user-centric interfaces that offer seamless user experiences, driving engagement and customer satisfaction.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    description: 'Leveraging cloud infrastructure for scalability and reliability. We streamline your development and deployment process with modern DevOps practices.',
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-slate-700/50">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">We transform ideas into digital reality. Here's how we can help you succeed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
