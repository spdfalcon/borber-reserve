import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiClock, FiCalendar, FiBookmark, FiUser } from 'react-icons/fi';

export const metadata = {
  title: 'وبلاگ | سامانه نوبت‌دهی آرایشگاه',
  description: 'مقالات و نکات آموزشی در حوزه آرایشگری و زیبایی',
};

export default function BlogPage() {
  const categories = [
    { name: 'همه', count: 42 },
    { name: 'مراقبت مو', count: 15 },
    { name: 'اصلاح صورت', count: 12 },
    { name: 'سبک و مد', count: 8 },
    { name: 'نگهداری پوست', count: 7 },
  ];

  const featuredPost = {
    slug: 'comprehensive-guide-to-choosing-the-right-hairstyle',
    title: "راهنمای جامع انتخاب مدل مو مناسب با فرم صورت",
    excerpt: "اصول انتخاب مدل مو متناسب با فرم صورت و نکات کلیدی که باید بدانید...",
    image: "https://images.unsplash.com/photo-1622286350715-39e0a56023a2",
    category: "راهنمای تخصصی",
    author: { name: "علی محمدی", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
    readTime: "۸ دقیقه",
    date: "۲ اردیبهشت ۱۴۰۳",
  };

  const posts = [
    {
      slug: 'beard-styling-tips',
      title: "تکنیک‌های حرفه‌ای اصلاح ریش",
      excerpt: "آشنایی با روش‌های نوین اصلاح و مدل‌دهی ریش...",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
      category: "اصلاح صورت",
      views: "2.1K",
      date: "۱ اردیبهشت ۱۴۰۳"
    },
    // ... more posts
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
          alt="Blog Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">مجله تخصصی آرایشگری</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              آخرین مقالات و نکات تخصصی در حوزه آرایش و پیرایش مردانه
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="جستجو در مقالات..."
                className="w-full px-6 py-4 pr-12 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/20 focus:border-white/40 focus:ring-0"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="px-6 py-3 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group hover:bg-primary-50"
            >
              <span className="text-gray-700 group-hover:text-primary-600">{cat.name}</span>
              <span className="bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full text-sm">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiClock className="ml-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="rounded-full ml-3"
                      />
                      <div>
                        <span className="block font-medium">{featuredPost.author.name}</span>
                        <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                      <FiBookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Latest Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">آخرین مقالات</h2>
            <Link
              href="/blog/archive"
              className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
            >
              مشاهده همه
              <span>←</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link 
                key={idx}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-primary-600 rounded-full text-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <FiCalendar className="ml-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <FiUser className="ml-1" />
                          {post.views} بازدید
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}