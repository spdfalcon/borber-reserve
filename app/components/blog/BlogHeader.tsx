import Image from 'next/image';
import { FiBookOpen, FiUsers, FiClock } from 'react-icons/fi';

export default function BlogHeader() {
  const stats = [
    { icon: FiBookOpen, label: 'مقاله تخصصی', value: '+۲۰۰' },
    { icon: FiUsers, label: 'خواننده فعال', value: '+۱۵K' },
    { icon: FiClock, label: 'دقیقه مطالعه', value: '+۷۰۰' },
  ];

  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
        alt="مجله تخصصی آرایشگری"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 h-full flex flex-col justify-center pt-20">
        {/* Pre-title */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10 w-fit">
          <span className="text-primary-300 font-medium">مجله تخصصی آرایشگری</span>
        </div>
        
        {/* Title & Description */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            جدیدترین مقالات و{' '}
            <span className="text-primary-400">نکات تخصصی</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            با مطالعه مقالات تخصصی ما، با آخرین ترندها و تکنیک‌های روز دنیای آرایش و پیرایش مردانه آشنا شوید
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 space-x-reverse bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10"
            >
              <div className="p-2 rounded-lg bg-primary-500/20">
                <stat.icon className="w-6 h-6 text-primary-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
