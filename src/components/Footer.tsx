import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate developer creating exceptional digital 
                experiences with the latest technologies.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(['home', 'about', 'skills', 'projects', 'experience', 'contact'][index])}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <div>Web Development</div>
                <div>Mobile Applications</div>
                <div>API & Backend</div>
                <div>Technical Consulting</div>
                <div>Training</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div>Meknès, Morocco</div>
                <div>+212 6 99 23 31 64</div>
                <div>taaghimoaad@gmail.com</div>
              </div>
              
              <div className="flex space-x-4 mt-4">
                
               
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center space-x-1 text-gray-300">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Taaghi Moaad © 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;