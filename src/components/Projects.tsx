import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Peer to Peer Mentoring Web Application',
      description: 'Full stack mentoring site that connects tutees and tutors for personalized learning experience',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'Clerk Authentication'],
      url: 'https://github.com/reynardaj/WeLearn',
      featured: true
    },
    {
      title: 'Air Quality Forecasting',
      description: 'Forecasts short-term air quality from historical sensor data. Project involved cleaning and engineering time-series features from a Kaggle dataset, training a TensorFlow RNN, and validating results with MAE and RMSE.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['sklearn', 'tensorflow', 'RNN'],
      url: 'https://github.com/jason32456/AQM_AI/',
      featured: true
    },
    {
      title: 'Nindyamaya BINUS Student Learning Community',
      description: 'Planned the site structure and features for a mentor–mentee platform and coordinated designers and developers to turn requirements into implementation-ready work.',
      image: '/src/resource/Nindyamaya.png',
      technologies: ['MySQL', 'ViteJs', 'NodeJs'],
      url: 'https://newnindyamaya.bslc.or.id/',
      featured: true
    },
    {
      title: 'Safesip-Water Drinkability Classifier',
      description: 'Developed a machine learning classifier that determines water potability from measured properties including pH, hardness, and turbidity. Work included data cleaning, feature engineering, model training and validation, and visualization of predicted vs actual outcomes.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['sklearn', 'streamlit', 'matplotlib'],
      url: 'https://safesip.streamlit.app/',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </a>
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

export default Projects;