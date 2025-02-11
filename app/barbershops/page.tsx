export const metadata = {
  title: 'لیست آرایشگاه‌ها | سامانه نوبت‌دهی آرایشگاه',
  description: 'جستجو و مشاهده لیست آرایشگاه‌های تهران',
};

export default function BarbershopsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">فیلترها</h2>
          
          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">منطقه</h3>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">همه مناطق</option>
              {Array.from({length: 22}, (_, i) => (
                <option key={i + 1} value={i + 1}>منطقه {i + 1}</option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">امتیاز</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span>{rating} ستاره و بالاتر</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">محدوده قیمت</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="ml-2" />
                <span>اقتصادی</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="ml-2" />
                <span>متوسط</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="ml-2" />
                <span>لوکس</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          {/* Search and Sort */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <input
                type="search"
                placeholder="جستجوی آرایشگاه..."
                className="w-full md:w-96 p-2 border border-gray-300 rounded-md"
              />
              <select className="p-2 border border-gray-300 rounded-md">
                <option value="rating">بر اساس امتیاز</option>
                <option value="reviews">بر اساس تعداد نظرات</option>
                <option value="price-low">ارزان‌ترین</option>
                <option value="price-high">گران‌ترین</option>
              </select>
            </div>
          </div>

          {/* Barbershops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Barbershop Card - This will be mapped over real data */}
            {Array.from({length: 9}, (_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">آرایشگاه نمونه {i + 1}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">منطقه {Math.floor(Math.random() * 22) + 1} تهران</p>
                  <div className="flex items-center mb-2">
                    {Array.from({length: 5}, (_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                    <span className="mr-1 text-sm">({Math.floor(Math.random() * 100) + 1} نظر)</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                    رزرو نوبت
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-md ${
                    page === 1
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}