import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
  title: 'Web Developer',
  company: 'Université Moulay Ismail',
  location: 'Meknès, Morocco',
  period: '2023 - Present',
  description: 'Développeur dédié au sein de l’université, chargé de concevoir et développer des applications web pour faciliter les tâches des utilisateurs et améliorer l’efficacité des services.',
  achievements: [
    'Conception et développement d’applications web internes',
    'Optimisation des processus métiers grâce à des solutions numériques',
    'Support et accompagnement des utilisateurs dans l’adoption des nouvelles applications'
  ]
},

   {
  title: 'Intern Web Developer',
  company: 'Office Régional de Mise en Valeur Agricole du Tafilalet (ORMVAT)',
  location: 'Errachidia, Morocco',
  period: '2022 - 2023',
  description: 'Stage d’un mois au sein de l’ORMVAT, chargé de concevoir et développer une application web dédiée à la gestion du parc automobile.',
  achievements: [
    'Développement d’une application web de gestion de parc automobile',
    'Amélioration du suivi et de la traçabilité des véhicules',
    'Mise en place d’une interface simple et intuitive pour les utilisateurs'
  ]
}
,
    {
  title: 'Freelance Full Stack Developer',
  company: 'Online Services',
  location: 'Remote',
  period: '2023 - Present',
  description: 'Développement d’applications web et de solutions logicielles pour des clients internationaux via des services en ligne. Missions allant de la conception à la mise en production.',
  achievements: [
    'Conception et développement de projets full stack (Angular, React, Node.js, Spring Boot)',
    'Mise en place d’API sécurisées et intégration avec bases de données',
    'Collaboration avec des clients internationaux et livraison de solutions adaptées à leurs besoins'
  ]
}

  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Experience;