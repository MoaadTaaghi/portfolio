import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ECOM from './ECOM.png'
import dashboard from './dashboard.png'
import blog from './blog.png'
import cabinet from './cabinet.png'
import barber from './barber.png'
import res from './rest.png'


const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce application with order management, payments, and admin dashboard.',
      image: ECOM,
      technologies: ['React', 'Node.js', 'Mysql', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Interactive dashboard for data visualization with real-time charts.',
      image: dashboard,
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
     {
      title: 'Dental office management system',
      description: 'Comprehensive management system for dental practices with appointment scheduling and patient records.',
      image: cabinet,
      technologies: ['Next.js', 'PHP', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
     {
      title: 'BARBER SHOP MANAGEMENT SYSTEM',
      description: 'Comprehensive management system for barber shops with appointment scheduling and client management.',
      image: barber,
      technologies: ['React', 'Node.js', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Restaurant Management System',
      description: 'Comprehensive management system for restaurants with table reservations and order management.',
      image: res,
      technologies: ['React', 'Node.js', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
     {
      title: 'Blog Platform',
      description: 'Comprehensive blogging platform with user authentication, post management, and comments.',
      image: blog,
      technologies: ['React', 'Node.js', 'Chart.js', 'Mysql'],
      liveUrl: '#',
      githubUrl: '#'
    },
    

   
   
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;