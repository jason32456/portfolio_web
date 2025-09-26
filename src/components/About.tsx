import React from 'react';
import { Database, LineChart, Code2, Users, Package } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer Science Student with passion in Artificial Intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am a Computer Science student focused on AI/ML and software engineering. I build 
                reproducible ML prototypes and production-ready web features. I combine data work, 
                model evaluation, and full-stack implementation to turn experiments into interactive 
                demos and maintainable services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My project work spans comparative model studies, time-series forecasting, and end-user apps. 
                Highlights include an MRI tumor classification study contrasting CNNs and Vision Transformers, 
                a demo for water-potability classification, and a TensorFlow RNN for short-term air-quality 
                forecasting validated with MAE/RMSE. I also contributed modular Next.js components, implemented 
                role-based auth using Clerk, and coordinated cross-discipline teams to produce deployment-ready 
                deliverables.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am seeking an entry-level AI/ML or software engineering role where I can contribute to 
                data pipelines, model validation, and web deployment while growing into an ML engineer 
                who ships reliable systems.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Database className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Reproducible ML workflows</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Data cleaning, feature engineering, experiments, and notebooks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <LineChart className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Model evaluation & metrics</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    MAE, RMSE, accuracy, micro-F1 and visual diagnostics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Code2 className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Full-stack delivery</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Next.js components, REST interfaces, Streamlit demos, authentication (Clerk).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                  <Users className="text-amber-600 dark:text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration & coordination</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Task planning, GitHub workflows, handoffs between design and dev.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Package className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pragmatic deployment focus</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Packaging prototypes so they are testable and demonstrable.
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