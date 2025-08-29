import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['Home', 'IT/Tech', 'Science', 'General'];

  return (
    <motion.header 
      className="bg-news-dark text-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <motion.div 
            className="text-center md:text-left mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              World News Today
            </h1>
            <p className="text-news-accent mt-2 text-lg">
              Your source for the latest news from around the globe
            </p>
          </motion.div>
          
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-news-accent text-white shadow-lg'
                    : 'text-gray-200 hover:text-white hover:bg-news-medium'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
