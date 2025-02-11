'use client'
import { useState } from 'react';
import Image from 'next/image';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiInstagram,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi';



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // API call simulation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('پیام شما با موفقیت ارسال شد.');
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'آدرس',
      content: 'تهران، خیابان ولیعصر، بالاتر از میدان ونک',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: FiPhone,
      title: 'تلفن تماس',
      content: '۰۲۱-۸۸۸۸۸۸۸۸',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: FiMail,
      title: 'ایمیل',
      content: 'info@barber-reserve.ir',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: FiClock,
      title: 'ساعات کاری',
      content: 'شنبه تا پنجشنبه - ۹ صبح تا ۶ عصر',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'اینستاگرام' },
    { icon: FiTwitter, href: '#', label: 'توییتر' },
    { icon: FiLinkedin, href: '#', label: 'لینکدین' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
          alt="تماس با ما"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              ما همیشه آماده پاسخگویی به سؤالات و پیشنهادات شما هستیم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">موضوع</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">پیام</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium 
                  hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[400px] bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.420195721226!2d51.418549776256645!3d35.7207983272731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0728f1486b69%3A0x7c3e6a86d5e0ba96!2sVanak%20Square!5e0!3m2!1sen!2s!4v1708194429696!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}