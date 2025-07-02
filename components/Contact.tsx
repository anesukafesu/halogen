
import React, { useState } from 'react';

const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-900/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Thank you!</h3>
                <p className="text-slate-300">Your message has been sent. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"/>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"/>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"></textarea>
                </div>
                <div className="mt-8 text-right">
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-full text-cyan-400"><MailIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors"><a href="mailto:hello@halogen.rw">sales@halogenapps.com</a></p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-full text-cyan-400"><PhoneIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-white">Call Us</h3>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors"><a href="tel:+250788123456">+250 799 369 120</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
