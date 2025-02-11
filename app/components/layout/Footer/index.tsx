'use client'
import Link from 'next/link';
import NewsletterForm from '../../Newsletter';

export default function Footer() {
  const quickLinks = [
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
    { name: 'وبلاگ', href: '/blog' },
    { name: 'سوالات متداول', href: '/faq' },
    { name: 'قوانین و مقررات', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'اینستاگرام', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'تلگرام', href: 'https://telegram.org', icon: 'telegram' },
    { name: 'توییتر', href: 'https://twitter.com', icon: 'twitter' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              سامانه نوبت‌دهی آرایشگاه
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
              ما به شما کمک می‌کنیم تا بهترین آرایشگاه‌ها را پیدا کنید و به راحتی نوبت بگیرید.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              دسترسی سریع
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              اطلاعات تماس
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p>تهران، خیابان ولیعصر</p>
              <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p>ایمیل: info@barbershop.ir</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              خبرنامه
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              برای اطلاع از آخرین اخبار و تخفیف‌ها در خبرنامه ما عضو شوید
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 space-x-reverse mb-4 md:mb-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} سامانه نوبت‌دهی آرایشگاه. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}