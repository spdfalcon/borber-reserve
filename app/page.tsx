import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-600 to-primary-800 text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
            alt="background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                رزرو آنلاین نوبت آرایشگاه
              </h1>
              <p className="text-2xl mb-8 text-primary-100">
                به راحتی و در هر ساعتی از شبانه‌روز نوبت آرایشگاه خود را رزرو کنید
              </p>
              <Link 
                href="/barbershops"
                className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-medium hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                رزرو نوبت
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
                  alt="آرایشگاه مدرن"
                  fill
                  className="object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">چرا ما را انتخاب کنید؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature cards with updated styling */}
            {[
              {
                title: 'رزرو سریع و آسان',
                description: 'در کمتر از یک دقیقه نوبت خود را رزرو کنید',
                icon: 'https://img.icons8.com/fluency/96/000000/clock.png'
              },
              {
                title: 'بهترین آرایشگران',
                description: 'دسترسی به برترین آرایشگران با بالاترین امتیاز',
                icon: 'https://img.icons8.com/fluency/96/000000/barber-pole.png'
              },
              {
                title: 'نظرات واقعی',
                description: 'مشاهده نظرات و امتیازات واقعی مشتریان',
                icon: 'https://img.icons8.com/fluency/96/000000/star.png'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Barbershops Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">محبوب‌ترین آرایشگاه‌ها</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'آرایشگاه مدرن',
                image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
                rating: 4.9,
                location: 'سعادت آباد'
              },
              {
                name: 'آرایشگاه کلاسیک',
                image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
                rating: 4.8,
                location: 'جردن'
              },
              {
                name: 'آرایشگاه VIP',
                image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937',
                rating: 5.0,
                location: 'فرمانیه'
              }
            ].map((shop, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
                <div className="relative h-64">
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-gray-900">{shop.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="mr-2 text-lg text-gray-900">{shop.rating}</span>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">{shop.location}</p>
                  <Link 
                    href={`/barbershops/${i + 1}`}
                    className="block text-center bg-primary-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    مشاهده و رزرو
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">نظرات مشتریان</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'علی محمدی',
                comment: 'بهترین تجربه آرایشگری که تا به حال داشتم. سرعت رزرو عالی بود.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
              },
              {
                name: 'رضا احمدی',
                comment: 'کیفیت خدمات فوق‌العاده بود. حتماً باز هم استفاده خواهم کرد.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
              },
              {
                name: 'حسین کریمی',
                comment: 'رزرو آنلاین خیلی راحت بود و در وقتم صرفه‌جویی شد.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c"
            alt="background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">همین حالا نوبت خود را رزرو کنید</h2>
          <p className="text-2xl mb-10">بهترین آرایشگران در خدمت شما هستند</p>
          <Link 
            href="/barbershops"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-medium hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            جستجوی آرایشگاه
          </Link>
        </div>
      </section>
    </>
  );
}
