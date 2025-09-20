import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/', level: 90 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Next.js', level: 60 },

        
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Laravel', level: 70 },
        { name: 'Spring Boot', level: 40 },
      ]
    },
    {
      title: 'DevOps & Outils',
      skills: [
       
        { name: 'Git/GitHub', level: 95 },
    
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-700">Completed Projects</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">9+</div>
              <div className="text-gray-700">Satisfied Clients</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;