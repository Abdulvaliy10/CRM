import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'IT/Tech':
        return 'bg-blue-500';
      case 'Science':
        return 'bg-green-500';
      case 'General':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(news.category)}`}>
          {news.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {news.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {new Date(news.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          
          <motion.button
            className="bg-news-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-news-dark transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
