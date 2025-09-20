import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm Taaghi Moaad
            <span className="block text-3xl md:text-5xl text-blue-400 mt-4">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences. 
            I transform your ideas into modern and high-performance web solutions.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">

            <a href="mailto:taaghimoaad@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>

          <div className="space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
           <a
  href="mailto:tonemail@example.com"
  className="border border-gray-400 hover:border-white text-gray-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-block"
>
  Contact Me
</a>

          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;