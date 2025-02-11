import Image from 'next/image';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';

export default function FeaturedArticle({ article }: any) {
  return (
    <article className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-[400px] md:h-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <FiClock className="ml-1" /> {article.readingTime} دقیقه مطالعه
            </span>
          </div>
          <Link href={`/blog/${article.slug}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary-600 transition-colors">
              {article.title}
            </h2>
          </Link>
          <p className="text-gray-600 text-lg mb-6 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden relative ml-3">
                <Image
                  src={article.author.image}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block font-medium">{article.author.name}</span>
                <span className="text-gray-500 text-sm">{article.publishDate}</span>
              </div>
            </div>
            <Link
              href={`/blog/${article.slug}`}
              className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              ادامه مطلب
              <span className="mr-2 text-lg">←</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
