import Image from 'next/image';
import Link from 'next/link';
import { 
  FiClock, FiCalendar, FiBookmark, 
  FiArrowLeft, FiFacebook, FiTwitter, FiLinkedin, 
  FiThumbsUp, FiMessageCircle, FiEye 
} from 'react-icons/fi';

export default function BlogPost() {
  const article = {
    title: 'راهنمای جامع انتخاب مدل مو متناسب با فرم صورت',
    excerpt: 'در این راهنما به بررسی اصول انتخاب مدل مو برای انواع فرم‌های صورت می‌پردازیم...',
    image: 'https://images.unsplash.com/photo-1622286350715-39e0a56023a2',
    coverImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70',
    category: 'راهنمای تخصصی',
    publishDate: '۲ اردیبهشت ۱۴۰۳',
    readingTime: '۸ دقیقه',
    views: '2.5K',
    likes: 127,
    comments: 23,
    author: {
      name: 'علی محمدی',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'متخصص آرایش مو',
      bio: 'بیش از ۱۰ سال تجربه در زمینه آرایشگری مردانه و متخصص در اصلاح مو و صورت'
    },
    tags: ['مدل مو', 'آموزش', 'سبک مو', 'فرم صورت'],
    relatedPosts: [
      {
        title: 'تکنیک‌های حرفه‌ای اصلاح ریش',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
        readingTime: '6 دقیقه'
      },
      {
        title: 'راهنمای انتخاب محصولات مراقبت از مو',
        image: 'https://images.unsplash.com/photo-1567654097050-6a23077d0fba',
        readingTime: '5 دقیقه'
      }
    ]
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white/80 mb-8 hover:text-white transition-colors group"
            >
              <FiArrowLeft className="ml-2 group-hover:-translate-x-1 transition-transform" />
              بازگشت به وبلاگ
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm text-primary-300 text-sm mb-6 border border-primary-500/20">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ml-3 ring-2 ring-primary-500/20">
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
                <div className="flex items-center gap-6 text-white/80">
                  <span className="flex items-center">
                    <FiCalendar className="ml-2" />
                    {article.publishDate}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="ml-2" />
                    {article.readingTime}
                  </span>
                  <span className="flex items-center">
                    <FiEye className="ml-2" />
                    {article.views} بازدید
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-pre:bg-gray-800 prose-pre:text-gray-100">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">فرم‌های مختلف صورت</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1622286350715-39e0a56023a2"
                      alt="مدل مو"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
                      alt="مدل مو"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
                </p>
                
                {/* Tags & Social */}
                <div className="border-t border-gray-100 mt-12 pt-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
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
                    <div className="flex gap-3">
                      {[FiFacebook, FiTwitter, FiLinkedin].map((Icon, i) => (
                        <button
                          key={i}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-gray-600" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <FiThumbsUp className="w-5 h-5" />
                      <span>{article.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <FiMessageCircle className="w-5 h-5" />
                      <span>{article.comments} نظر</span>
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                    <FiBookmark className="w-5 h-5" />
                    <span>ذخیره</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Author Bio */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary-100">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{article.author.name}</h3>
                <p className="text-primary-600 mb-4">{article.author.role}</p>
                <p className="text-gray-600 mb-6 text-sm">{article.author.bio}</p>
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors">
                  دنبال کردن
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-xl mb-6">مقالات مرتبط</h3>
              <div className="space-y-6">
                {article.relatedPosts.map((post, index) => (
                  <Link href="#" key={index} className="group block">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="ml-1" />
                          {post.readingTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
