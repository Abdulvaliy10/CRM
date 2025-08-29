import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { newsData } from './data/newsData';
import { NewsItem } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'Home') {
      return newsData;
    }
    return newsData.filter(news => news.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </motion.div>
        
        {filteredNews.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              No news found for this category
            </h2>
            <p className="text-gray-500">
              Try selecting a different category or check back later for updates.
            </p>
          </motion.div>
        )}
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
