
import React from 'react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg height="32" width="32" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2zM5 8.09l7-3.89 7 3.89v5.82l-7 3.89-7-3.89V8.09z" fill="url(#logoGradientFooter)" opacity="0.4"/>
      <path d="M9 9v6h2v-2.5h2V15h2V9h-2v2.5h-2V9H9z" fill="url(#logoGradientFooter)" />
    </svg>
    <span className="font-bold text-xl text-white">Halogen</span>
  </div>
);

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
        {children}
    </a>
);

const TwitterIcon = () => (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>);
const LinkedInIcon = () => (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>);
const GithubIcon = () => (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>);


const Footer = () => {
    return (
        <footer className="bg-slate-800/50 border-t border-slate-700/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Logo />
                        <p className="mt-4 text-slate-400 text-sm">
                            Crafting digital excellence from Kigali, Rwanda.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold tracking-wider">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                           <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</a></li>
                           <li><a href="#products" className="text-slate-400 hover:text-cyan-400 transition-colors">Products</a></li>
                           <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                           <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold tracking-wider">Contact</h3>
                        <ul className="mt-4 space-y-2 text-slate-400">
                           <li>123 KG Avenue, Kigali</li>
                           <li><a href="mailto:hello@halogen.rw" className="hover:text-cyan-400 transition-colors">hello@halogen.rw</a></li>
                           <li><a href="tel:+250788123456" className="hover:text-cyan-400 transition-colors">+250 788 123 456</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold tracking-wider">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            <SocialIcon href="#"><TwitterIcon /></SocialIcon>
                            <SocialIcon href="#"><LinkedInIcon /></SocialIcon>
                            <SocialIcon href="#"><GithubIcon /></SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700/50 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Halogen Technologies Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
