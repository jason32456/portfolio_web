import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of core platform features serving 100k+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with design and product teams on user experience improvements'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed responsive web applications for diverse client base',
        'Optimized application performance resulting in 40% faster load times',
        'Worked closely with designers to implement pixel-perfect interfaces',
        'Contributed to open-source projects and internal tooling'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Built and maintained company website and internal tools',
        'Learned modern development practices and agile methodologies',
        'Participated in feature planning and technical discussions',
        'Gained experience with version control and collaborative development'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                    <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span>{item}</span>
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