'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PiScissors, PiUser } from 'react-icons/pi';
import { RiMenuLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'آرایشگاه‌ها', href: '/barbershops' },
    { name: 'وبلاگ', href: '/blog' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <PiScissors className={`h-8 w-8 ${scrolled ? 'text-primary-600' : 'text-white'}`} />
            </motion.div>
            <span className={`text-2xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              برایت‌کات
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium group ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4 px-6 py-2 bg-primary-500 text-white rounded-full font-medium flex items-center space-x-2 space-x-reverse hover:bg-primary-600 transition-colors"
            >
              <PiUser className="h-4 w-4" />
              <span>رزرو نوبت</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full bg-primary-500/10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <RiMenuLine className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <PiScissors className="h-6 w-6 text-primary-600" />
                  <span className="text-xl font-bold text-gray-900">برایت‌کات</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <IoClose className="h-6 w-6 text-gray-600" />
                </motion.button>
              </div>

              <nav className="space-y-4">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-6 py-3 bg-primary-500 text-white rounded-xl font-medium flex items-center justify-center space-x-2 space-x-reverse hover:bg-primary-600 transition-colors"
                >
                  <PiUser className="h-4 w-4" />
                  <span>رزرو نوبت</span>
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </header>
  );
}