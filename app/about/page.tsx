'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PiUsers, PiCalendarCheck, PiScissors, PiChartLineUp } from 'react-icons/pi';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      id: 1, 
      name: 'کاربران فعال', 
      value: '۱۵,۰۰۰+', 
      icon: PiUsers,
      description: 'کاربر راضی در سراسر تهران'
    },
    { 
      id: 2, 
      name: 'نوبت‌های موفق', 
      value: '۶۰,۰۰۰+', 
      icon: PiCalendarCheck,
      description: 'رزرو موفق در سال گذشته'
    },
    { 
      id: 3, 
      name: 'آرایشگران متخصص', 
      value: '۳۰۰+', 
      icon: PiScissors,
      description: 'آرایشگر حرفه‌ای و مجرب'
    },
    { 
      id: 4, 
      name: 'رشد سالانه', 
      value: '۱۵۰٪', 
      icon: PiChartLineUp,
      description: 'افزایش رضایت مشتریان'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
            alt="برایت‌کات"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/70" />
        </div>
        <div className="container relative mx-auto px-4 py-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              تحول در تجربه
              <br />
              <span className="text-primary-300">آرایشگری مدرن</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              ما در برایت‌کات، با ترکیب تکنولوژی و خلاقیت، صنعت آرایشگری را متحول کرده‌ایم.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                چشم‌انداز ما
              </h2>
              <p className="text-lg text-gray-300">
                ما می‌خواهیم با ایجاد یک پلتفرم هوشمند و کارآمد، تجربه رزرو نوبت آرایشگاه را برای همه آسان‌تر کنیم.
                هدف ما ارائه خدمات با کیفیت و قابل اعتماد به مشتریان است.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
                  alt="خدمات ما"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`bg-gray-50 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 delay-${index * 100}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.name}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c"
            alt="پیوستن به ما"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">به ما بپیوندید</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            اگر صاحب آرایشگاه هستید و می‌خواهید کسب‌وکار خود را متحول کنید،
            همین حالا به خانواده بزرگ برایت‌کات بپیوندید
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 hover:scale-105 transition-all duration-300">
            شروع همکاری با ما
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        section {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}