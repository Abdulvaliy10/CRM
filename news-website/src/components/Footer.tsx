import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-news-dark text-white py-8 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">World News Today</h3>
            <p className="text-gray-300">
              Your trusted source for the latest news from around the globe.
              Stay informed with accurate, timely reporting.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-news-accent transition-colors">IT/Tech</a></li>
              <li><a href="#" className="hover:text-news-accent transition-colors">Science</a></li>
              <li><a href="#" className="hover:text-news-accent transition-colors">General</a></li>
              <li><a href="#" className="hover:text-news-accent transition-colors">World News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-news-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-news-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-news-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 World News Today. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
