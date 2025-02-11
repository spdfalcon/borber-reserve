'use client'
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ArticleGrid({ articles }) {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {articles.map((article: any) => (
        <motion.div key={article.slug} variants={item}>
          <ArticleCard article={article} />
        </motion.div>
      ))}
    </motion.div>
  );
}
