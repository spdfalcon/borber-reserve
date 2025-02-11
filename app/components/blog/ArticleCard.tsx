import Image from 'next/image';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';

export default function ArticleCard({ article }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <span className="absolute bottom-4 right-4 px-3 py-1 bg-primary-500/90 text-white rounded-full text-sm backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="p-6">
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={24}
              height={24}
              className="rounded-full ml-2"
            />
            <span>{article.author.name}</span>
          </div>
          <div className="flex items-center">
            <FiClock className="ml-1" />
            <span>{article.readingTime} دقیقه</span>
          </div>
        </div>
      </div>
    </article>
  );
}
