import Image from 'next/image';

export default function BlogHero() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
        alt="وبلاگ برایت‌کات"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            وبلاگ برایت‌کات
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            آخرین مقالات و نکات کاربردی در حوزه آرایش و پیرایش مردانه
          </p>
        </div>
      </div>
    </section>
  );
}
