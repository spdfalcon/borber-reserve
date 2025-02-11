import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiStar, FiSearch, FiSliders, FiClock, FiDollarSign } from 'react-icons/fi';

export const metadata = {
  title: 'لیست آرایشگاه‌ها | سامانه نوبت‌دهی آرایشگاه',
  description: 'جستجو و مشاهده لیست آرایشگاه‌های تهران',
};

export default function BarbershopsPage() {
  const barbershops = [
    {
      id: 1,
      name: "آرایشگاه مدرن",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
      rating: 4.9,
      reviews: 128,
      location: "سعادت آباد",
      priceRange: "متوسط",
      openingHours: "۹ صبح تا ۱۰ شب",
      featured: true,
      services: ["اصلاح مو", "اصلاح صورت", "رنگ مو"],
    },
    // ... more barbershops
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
          alt="آرایشگاه‌ها"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white mb-8">
              <h1 className="text-4xl font-bold mb-4">بهترین آرایشگاه‌های تهران</h1>
              <p className="text-xl text-gray-200">از بین صدها آرایشگاه، بهترین را انتخاب کنید</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-2 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <FiSearch className="w-5 h-5 text-gray-400" />
                  <input
                    type="search"
                    placeholder="جستجوی آرایشگاه..."
                    className="w-full p-2 focus:outline-none text-gray-700"
                  />
                </div>
                <div className="flex-1 flex items-center gap-2 px-4 border-r">
                  <FiMapPin className="w-5 h-5 text-gray-400" />
                  <select className="w-full p-2 focus:outline-none text-gray-700 bg-transparent">
                    <option value="">انتخاب منطقه</option>
                    {Array.from({length: 22}, (_, i) => (
                      <option key={i + 1} value={i + 1}>منطقه {i + 1}</option>
                    ))}
                  </select>
                </div>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
                  جستجو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">فیلترها</h2>
                <FiSliders className="w-5 h-5 text-gray-500" />
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FiDollarSign className="w-5 h-5 text-primary-600" />
                  محدوده قیمت
                </h3>
                <div className="space-y-3">
                  {['اقتصادی', 'متوسط', 'لوکس'].map((price) => (
                    <label key={price} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                      <span className="group-hover:text-primary-600 transition-colors">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-primary-600" />
                  خدمات
                </h3>
                <div className="space-y-3">
                  {['اصلاح مو', 'اصلاح صورت', 'رنگ مو', 'کوتاهی', 'شینیون'].map((service) => (
                    <label key={service} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                      <span className="group-hover:text-primary-600 transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FiStar className="w-5 h-5 text-primary-600" />
                  حداقل امتیاز
                </h3>
                <div className="space-y-3">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="rating" className="form-radio text-primary-600 focus:ring-primary-500" />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FiStar
                            key={index}
                            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-gray-600">و بالاتر</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-6">
              {barbershops.map((shop) => (
                <Link key={shop.id} href={`/barbershops/${shop.id}`}>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-48">
                      <Image
                        src={shop.image}
                        alt={shop.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {shop.featured && (
                        <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          ویژه
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                        {shop.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FiStar
                            key={index}
                            className={`w-4 h-4 ${
                              index < Math.floor(shop.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600">
                          ({shop.reviews} نظر)
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {shop.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {shop.openingHours}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {shop.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}