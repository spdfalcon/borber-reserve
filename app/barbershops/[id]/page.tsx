'use client'
import { useState } from 'react';
import Image from 'next/image';
import { 
  FiMapPin, FiStar, FiPhone, 
  FiInstagram 
} from 'react-icons/fi';
import CalendarReserve from '@/app/components/booking/CalendarReserve';

export default function BarbershopDetailPage() {
  const [activeTab, setActiveTab] = useState('about');

  const barbershop = {
    name: "آرایشگاه VIP رویال",
    rating: 4.8,
    reviews: 156,
    location: "سعادت‌آباد، خیابان علامه شمالی",
    about: `آرایشگاه VIP رویال با بیش از ۱۰ سال سابقه درخشان در ارائه خدمات آرایشی و پیرایشی مردانه...`,
    images: [
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
      'https://images.unsplash.com/photo-1622286350715-39e0a56023a2',
    ],
    team: [
      {
        name: "استاد محمدی",
        role: "متخصص اصلاح مو",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        experience: "۱۵ سال",
      },
      // ... more team members
    ],
    workingHours: {
      شنبه_تا_چهارشنبه: "۹ صبح تا ۹ شب",
      پنجشنبه: "۹ صبح تا ۸ شب",
      جمعه: "تعطیل"
    },
    contact: {
      phone: "۰۲۱-۱۲۳۴۵۶۷۸",
      instagram: "@royal_barbershop",
      address: "تهران، سعادت‌آباد، خیابان علامه شمالی، پلاک ۱۲۳"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="relative h-full">
          <Image
            src={barbershop.images[0]}
            alt={barbershop.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{barbershop.name}</h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                {barbershop.location}
              </div>
              <div className="flex items-center">
                <FiStar className="mr-2 text-yellow-400" />
                {barbershop.rating} ({barbershop.reviews} نظر)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="flex space-x-4 space-x-reverse border-b">
                {['about', 'services', 'team', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 font-medium transition-colors ${
                      activeTab === tab
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    {tab === 'about' && 'درباره ما'}
                    {tab === 'services' && 'خدمات'}
                    {tab === 'team' && 'تیم ما'}
                    {tab === 'reviews' && 'نظرات'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {barbershop.about}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-medium text-gray-900 mb-2">ساعات کاری</h3>
                      {Object.entries(barbershop.workingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm text-gray-600">
                          <span>{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-medium text-gray-900 mb-2">اطلاعات تماس</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FiPhone className="ml-2" />
                          {barbershop.contact.phone}
                        </div>
                        <div className="flex items-center">
                          <FiInstagram className="ml-2" />
                          {barbershop.contact.instagram}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* ... other tab contents ... */}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <CalendarReserve />
          </div>
        </div>
      </div>
    </div>
  );
}