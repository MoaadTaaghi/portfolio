import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';
import image from './image.jpg'; // Ensure you have an image at this path or replace with your own

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Passionate developer with over 5 years of experience creating 
                modern web applications. I specialize in front-end and back-end 
                technologies to deliver complete and high-performance solutions.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My approach combines technical creativity with business vision to 
                develop products that make a difference. I love taking on new 
                challenges and learning continuously.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Clean Code</h3>
                    <p className="text-gray-600">Solid and maintainable architecture</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Creative solutions to complex problems</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaboration</h3>
                    <p className="text-gray-600">Effective teamwork and clear communication</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              {/* Professional Photo Section */}
              <div className="relative mb-8">
                <div className="w-80 h-80 mx-auto relative">
      <div className="w-full h-full rounded-2xl border-4 border-white shadow-xl overflow-hidden transition-all duration-300">
        <img
          src={image}
          alt="Professional photo"
          className="w-full h-full object-cover"
          // centre horizontalement (50%) et remonte le focus à 20% du haut
          style={{ objectPosition: "50% 20%" }}
        />
      </div>

      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
    </div>


                
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">My Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Technical excellence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Continuous learning</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Positive impact</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Client satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;