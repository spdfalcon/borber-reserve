'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90" />
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-3xl transform rotate-45" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <FiMail className="w-12 h-12 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">
            عضویت در خبرنامه تخصصی آرایشگری
          </h3>
          <p className="text-primary-100 mb-8 text-lg">
            جدیدترین مقالات و نکات تخصصی را هر هفته در ایمیل خود دریافت کنید
          </p>
          <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/20 focus:border-white/40 focus:ring-0"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="px-8 py-4 bg-white text-primary-600 rounded-xl font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                عضویت
                <FiArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 bg-primary-50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
