'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHash } from 'react-icons/fi';

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'همه مقالات' },
    { id: 'hair', name: 'مراقبت مو', count: 12 },
    { id: 'beard', name: 'اصلاح صورت', count: 8 },
    { id: 'style', name: 'سبک و مد', count: 15 },
    { id: 'skin', name: 'مراقبت پوست', count: 10 },
  ];

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-3 justify-center bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className="relative group"
          >
            <div className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
            }`}>
              <FiHash className="w-4 h-4" />
              <span>{category.name}</span>
              {category.count && (
                <span className={`text-sm px-2 py-0.5 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                }`}>
                  {category.count}
                </span>
              )}
            </div>
            {activeCategory === category.id && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-primary-500 rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
