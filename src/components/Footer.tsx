import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center md:justify-start">
              Made with <Heart className="mx-2 text-red-500" size={16} fill="currentColor" /> by Jason Christian Budhihartono
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 Jason Christian Budhihartono. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;