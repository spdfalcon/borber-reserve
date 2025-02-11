import BlogHeader from '../components/blog/BlogHeader';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import ArticleGrid from '../components/blog/ArticleGrid';
import CategoryTabs from '../components/blog/CategoryTabs';
import NewsletterSection from '../components/blog/NewsletterSection';

export const metadata = {
  title: 'وبلاگ | سامانه نوبت‌دهی آرایشگاه',
  description: 'مقالات و نکات آموزشی در حوزه آرایشگری و زیبایی',
};

export default async function BlogPage() {
  const featuredArticle = {
    slug: 'hairstyle-guide',
    title: 'راهنمای جامع انتخاب مدل مو متناسب با فرم صورت',
    excerpt: 'در این راهنما به بررسی اصول انتخاب مدل مو برای انواع فرم‌های صورت می‌پردازیم و نکات کلیدی برای داشتن ظاهری متناسب را مرور می‌کنیم...',
    image: 'https://images.unsplash.com/photo-1622286350715-39e0a56023a2',
    category: 'راهنمای تخصصی',
    readingTime: 10,
    publishDate: '۲ اردیبهشت ۱۴۰۳',
    author: {
      name: 'علی محمدی',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  };

  const articles = [
    {
      slug: 'beard-care',
      title: 'اصول نگهداری از ریش',
      excerpt: 'مراقبت صحیح از ریش برای داشتن ظاهری آراسته...',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
      category: 'مراقبت',
      readingTime: 6,
      author: {
        name: 'رضا کریمی',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
    },
    // ... اضافه کردن مقالات بیشتر
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <BlogHeader />
      
      <div className="container mx-auto px-4 mt-5 relative z-10">
        {/* Categories */}
        <CategoryTabs />

        {/* Featured Article */}
        <div className="my-16">
          <FeaturedArticle article={featuredArticle} />
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="w-8 h-1 bg-primary-500 rounded-full ml-3"></span>
              آخرین مقالات
            </h2>
            <a href="/blog/archive" className="text-primary-600 hover:text-primary-700 flex items-center gap-2">
              مشاهده همه
              <span className="text-lg">←</span>
            </a>
          </div>
          <ArticleGrid articles={articles} />
        </div>

        {/* Newsletter */}
        <div className="mb-16">
          <NewsletterSection />
        </div>

        {/* Pagination */}
        <div className="flex justify-center pb-16">
          <nav className="flex gap-2 p-1.5 bg-white rounded-2xl shadow-lg">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
                  page === 1
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}