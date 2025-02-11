export const metadata = {
  title: 'جزئیات آرایشگاه | سامانه نوبت‌دهی آرایشگاه',
  description: 'مشاهده جزئیات و رزرو نوبت آرایشگاه',
};

export default function BarbershopDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Video/Image */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="aspect-video relative">
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        </div>
      </div>

      {/* Barbershop Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">آرایشگاه نمونه</h1>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              <span className="mr-2">(۴.۸ از ۱۲۳ نظر)</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              منطقه ۳ تهران، خیابان ولیعصر، کوچه مثال
            </p>
          </div>

          {/* Services */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">خدمات و قیمت‌ها</h2>
            <div className="space-y-4">
              {['اصلاح مو', 'اصلاح صورت', 'رنگ مو', 'شینیون'].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 border-b last:border-0">
                  <span>{service}</span>
                  <span className="font-semibold">{(index + 1) * 50},000 تومان</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">تیم ما</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-2"></div>
                  <h3 className="font-semibold">آرایشگر {i + 1}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">متخصص اصلاح مو</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">نظرات مشتریان</h2>
            <div className="space-y-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="border-b last:border-0 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 ml-3"></div>
                    <div>
                      <h4 className="font-semibold">کاربر {i + 1}</h4>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, j) => (
                          <span key={j} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p>بسیار عالی و حرفه‌ای. من از نتیجه کار راضی بودم.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg sticky top-4">
            <h2 className="text-2xl font-bold mb-4">رزرو نوبت</h2>
            <div className="space-y-4">
              {/* Calendar will be implemented here */}
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg min-h-[300px] mb-4">
                تقویم
              </div>
              
              <select className="w-full p-2 border border-gray-300 rounded-md mb-4">
                <option value="">انتخاب خدمت</option>
                <option>اصلاح مو</option>
                <option>اصلاح صورت</option>
                <option>رنگ مو</option>
                <option>شینیون</option>
              </select>

              <select className="w-full p-2 border border-gray-300 rounded-md mb-4">
                <option value="">انتخاب آرایشگر</option>
                <option>آرایشگر 1</option>
                <option>آرایشگر 2</option>
                <option>آرایشگر 3</option>
              </select>

              <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors">
                رزرو نوبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}