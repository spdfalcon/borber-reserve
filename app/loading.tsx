'use client'
import { motion } from 'framer-motion';
import { PiScissors } from 'react-icons/pi';

export default function RootLoading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center z-50">
      <div className="relative">
        {/* Glowing circles */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-500/20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative flex flex-col items-center">
          {/* Rotating scissors */}
          <motion.div
            className="mb-8"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <PiScissors className="w-20 h-20 text-white" />
          </motion.div>

          {/* Loading text */}
          <motion.h2
            className="text-2xl font-bold text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            برایت‌کات
          </motion.h2>

          {/* Loading dots */}
          <div className="flex space-x-2 space-x-reverse">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  y: ["0%", "-50%", "0%"],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Loading bar */}
          <div className="mt-8 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
