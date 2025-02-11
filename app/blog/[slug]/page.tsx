import RelatedArticles from '@/app/components/blog/RelatedArticles';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiCalendar, FiShare2, FiBookmark, FiArrowLeft } from 'react-icons/fi';

export async function generateMetadata() {
  return {
    title: 'راهنمای انتخاب مدل مو | وبلاگ آرایشگاه',
    description: 'راهنمای کامل انتخاب مدل مو متناسب با فرم صورت - آموزش تخصصی آرایشگری',
  };
}

export default function BlogPost() {
  const article = {
    title: 'راهنمای جامع انتخاب مدل مو متناسب با فرم صورت',
    excerpt: 'در این راهنما به بررسی اصول انتخاب مدل مو برای انواع فرم‌های صورت می‌پردازیم...',
    content: `
      <p class="text-xl leading-relaxed mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">فرم‌های مختلف صورت</h2>
      <p class="mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است:</p>
      <ul class="list-disc list-inside space-y-2 mb-8">
        <li>صورت گرد</li>
        <li>صورت بیضی</li>
        <li>صورت مربعی</li>
        <li>صورت کشیده</li>
      </ul>

      <div class="my-12 relative h-[400px] rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1622286350715-39e0a56023a2" alt="مدل مو" class="object-cover w-full h-full" />
        <p class="text-sm text-gray-500 mt-2 text-center">انواع مختلف مدل مو برای فرم‌های مختلف صورت</p>
      </div>

      <h2 class="text-2xl font-bold mb-4">نکات مهم در انتخاب مدل مو</h2>
      <p class="mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
    `,
    image: 'https://images.unsplash.com/photo-1622286350715-39e0a56023a2',
    category: 'راهنمای تخصصی',
    publishDate: '۲ اردیبهشت ۱۴۰۳',
    readingTime: 10,
    author: {
      name: 'علی محمدی',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'متخصص آرایش مو',
    },
    tags: ['مدل مو', 'آموزش', 'سبک مو', 'فرم صورت'],
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/90" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white mb-8 hover:text-primary-300 transition-colors"
            >
              <FiArrowLeft className="ml-2" />
              بازگشت به وبلاگ
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ml-3">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{article.author.name}</div>
                  <div className="text-sm text-white/70">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="flex items-center">
                  <FiCalendar className="ml-2" />
                  {article.publishDate}
                </span>
                <span className="flex items-center">
                  <FiClock className="ml-2" />
                  {article.readingTime} دقیقه مطالعه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Share & Save */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex justify-around">
                <button className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <FiShare2 className="w-6 h-6 mb-2" />
                  <span className="text-sm">اشتراک‌گذاری</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <FiBookmark className="w-6 h-6 mb-2" />
                  <span className="text-sm">ذخیره مقاله</span>
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{article.author.name}</h3>
                <p className="text-gray-600 mb-4">{article.author.role}</p>
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-xl hover:bg-primary-700 transition-colors">
                  دنبال کردن
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <RelatedArticles />
          </div>
        </div>
      </div>
    </article>
  );
}
