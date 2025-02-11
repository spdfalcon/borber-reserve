export const metadata = {
  title: 'وبلاگ | سامانه نوبت‌دهی آرایشگاه',
  description: 'مقالات و نکات آموزشی در حوزه آرایشگری و زیبایی',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">وبلاگ</h1>
      
      {/* Featured Post */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="aspect-video relative bg-gray-200"></div>
        <div className="p-6">
          <span className="text-primary-600 text-sm font-semibold">آموزشی</span>
          <h2 className="text-2xl font-bold mt-2 mb-4">نکات مهم در انتخاب مدل مو</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            در این مقاله به بررسی مهم‌ترین نکات در انتخاب مدل مو متناسب با فرم صورت می‌پردازیم...
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">۲ ساعت پیش</span>
            <a href="/blog/1" className="text-primary-600 hover:text-primary-700">
              ادامه مطلب →
            </a>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }, (_, i) => (
          <article key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video relative bg-gray-200"></div>
            <div className="p-6">
              <span className="text-primary-600 text-sm font-semibold">
                {['آموزشی', 'سبک زندگی', 'مراقبت مو'][i % 3]}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-4">عنوان مقاله {i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                خلاصه کوتاهی از محتوای مقاله که در این قسمت نمایش داده می‌شود...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{i + 1} روز پیش</span>
                <a href={`/blog/${i + 1}`} className="text-primary-600 hover:text-primary-700">
                  ادامه مطلب →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
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
    </div>
  );
}