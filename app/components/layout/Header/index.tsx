'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PiScissors, PiUserCircle, PiCalendarCheck, PiPhone } from 'react-icons/pi';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'صفحه اصلی', href: '/', icon: PiScissors },
    { name: 'آرایشگاه‌ها', href: '/barbershops', icon: PiCalendarCheck },
    { name: 'درباره ما', href: '/about', icon: PiUserCircle },
    { name: 'تماس با ما', href: '/contact', icon: PiPhone },
    { name: 'وبلاگ', href: '/blog', icon: PiCalendarCheck },
  ];

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-24"></div>
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/80 py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-full blur-md group-hover:blur-lg transition-all opacity-20 ${
                  scrolled ? 'bg-primary-500' : 'bg-white'
                }`}></div>
                <PiScissors className={`h-10 w-10 relative ${
                  scrolled ? 'text-primary-600' : 'text-white'
                }`} />
              </motion.div>
              <span className={`text-2xl font-bold ${
                scrolled 
                  ? 'text-gray-800' 
                  : 'text-white drop-shadow-md'
              }`}>
                برایت‌کات
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 space-x-reverse">
              <div className={`p-2 rounded-2xl transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-100/80' 
                  : 'bg-white/10 backdrop-blur-md'
              }`}>
                {navigation.map((item) => (
                  <motion.div
                    key={item.href}
                    className="inline-block"
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 rounded-xl text-sm font-medium inline-flex items-center group ${
                        activeItem === item.href
                          ? scrolled
                            ? 'text-primary-600 bg-white shadow-md'
                            : 'text-white bg-white/20 shadow-lg'
                          : scrolled
                            ? 'text-gray-700 hover:bg-white hover:shadow-md'
                            : 'text-gray-100 hover:text-white hover:bg-white/20'
                      } transition-all duration-300`}
                      onClick={() => setActiveItem(item.href)}
                    >
                      <item.icon className="w-4 h-4 ml-2" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mr-4 px-6 py-3 rounded-xl font-medium flex items-center space-x-2 space-x-reverse ${
                  scrolled 
                    ? 'bg-primary-600 text-white shadow-lg hover:shadow-primary-500/30' 
                    : 'bg-white text-primary-600 shadow-lg shadow-black/20 hover:shadow-white/20'
                } transition-all duration-300`}
              >
                <PiCalendarCheck className="w-5 h-5" />
                <span>رزرو نوبت</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-3 rounded-xl ${
                scrolled 
                  ? 'bg-gray-100 text-gray-700' 
                  : 'bg-white/10 text-white backdrop-blur-md'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <RiMenu4Fill className="w-6 h-6" />
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50"
            >
              <div className="flex flex-col h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center space-x-2 space-x-reverse">
                      <PiScissors className="w-8 h-8 text-primary-600" />
                      <span className="text-xl font-bold text-gray-900">برایت‌کات</span>
                    </Link>
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <IoClose className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>

                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <motion.div
                        key={item.href}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
                            activeItem === item.href ? 'bg-primary-50 text-primary-600' : ''
                          }`}
                          onClick={() => {
                            setActiveItem(item.href);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <item.icon className="w-5 h-5 ml-3" />
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-6 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-medium flex items-center justify-center space-x-2 space-x-reverse hover:bg-primary-700 transition-colors"
                  >
                    <PiCalendarCheck className="w-5 h-5" />
                    <span>رزرو نوبت</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}