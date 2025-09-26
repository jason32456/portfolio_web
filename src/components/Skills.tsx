import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Next.js', level: 85 },
      ]
    },
    {
      title: 'Backend',
      color: 'emerald',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 68 },
      ]
    },
    {
      title: 'Tools & Other',
      color: 'amber',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 50 },
        { name: 'Figma', level: 85 },
      ]
    },
    {
      title: 'Languages',
      color: 'indigo',
      skills: [
        { name: 'Indonesian (Native)', level: 100 },
        { name: 'English', level: 90 },
        { name: 'Chinese', level: 20 },
      ]
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200' },
      amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200' },
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-xl font-semibold ${getColorClasses(category.color, 'text')} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 ${getColorClasses(category.color, 'border')} border`}>
                        <div 
                          className={`h-2 ${getColorClasses(category.color, 'bg')} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;