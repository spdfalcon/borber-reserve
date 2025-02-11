import Image from 'next/image';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';

export default function RelatedArticles() {
  const relatedArticles = [
    {
      slug: 'hair-care-tips',
      title: 'نکات مهم در مراقبت از مو',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
      readingTime: 5,
    },
    {
      slug: 'beard-styles-2024',
      title: 'مدل‌های ریش در سال ۲۰۲۴',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
      readingTime: 7,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="font-bold text-xl mb-6">مقالات مرتبط</h3>
      <div className="space-y-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block"
          >
            <div className="flex gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-medium mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="ml-1" />
                  {article.readingTime} دقیقه مطالعه
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
