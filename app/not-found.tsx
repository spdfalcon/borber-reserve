'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PiScissors } from 'react-icons/pi';

export default function NotFound() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 180) % 360);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-pulse bg-primary-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-32 h-32 opacity-50"></div>
          <PiScissors 
            className="w-24 h-24 text-primary-600 mx-auto relative"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 1s ease-in-out'
            }}
          />
        </div>

        <h1 className="text-8xl font-bold text-primary-600 mb-4 animate-bounce">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          صفحه مورد نظر پیدا نشد!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            بازگشت به صفحه اصلی
          </Link>
          
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-xl font-medium hover:bg-primary-50 border-2 border-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            تماس با پشتیبانی
          </Link>
        </div>

        <div className="mt-12 text-gray-500">
          <p>پیشنهاد می‌کنیم:</p>
          <ul className="mt-2 space-y-1">
            <li>• آدرس URL را بررسی کنید</li>
            <li>• به صفحه قبل بازگردید</li>
            <li>• از منوی اصلی استفاده کنید</li>
          </ul>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-50"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-300 rounded-full animate-float-delayed opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary-500 rounded-full animate-float-slow opacity-40"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
