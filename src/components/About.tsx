import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate developer with 5+ years of experience creating digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I started my journey in web development during college, fascinated by the power 
                of code to bring ideas to life. What began as curiosity has evolved into a 
                passion for creating seamless user experiences and robust applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Today, I specialize in full-stack development with a focus on modern frameworks 
                and best practices. I love collaborating with teams to solve complex problems 
                and deliver exceptional products.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                  Lifelong Learner
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I write maintainable, scalable code following industry best practices 
                    and modern development patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Palette className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I believe great functionality deserves great design. I create 
                    interfaces that are both beautiful and intuitive.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                  <Zap className="text-amber-600 dark:text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I optimize every aspect of applications for speed, accessibility, 
                    and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;