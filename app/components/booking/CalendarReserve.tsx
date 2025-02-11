'use client'
import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { FiUser, FiClock, FiCalendar } from 'react-icons/fi';
import TimePicker from './TimePicker';

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  category: string;
  barbers: string[];
}

const services: Service[] = [
  {
    id: 1,
    name: 'اصلاح مو',
    duration: 30,
    price: 150000,
    category: 'مو',
    barbers: ['استاد محمدی', 'استاد رضایی']
  },
  {
    id: 2,
    name: 'اصلاح صورت',
    duration: 20,
    price: 80000,
    category: 'صورت',
    barbers: ['استاد محمدی', 'استاد کریمی']
  },
  {
    id: 3,
    name: 'رنگ مو',
    duration: 90,
    price: 450000,
    category: 'رنگ',
    barbers: ['استاد رضایی']
  }
];

export default function CalendarReserve() {
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">رزرو نوبت</h2>

      {/* Service Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
          <FiUser className="ml-2" />
          انتخاب خدمت
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`p-4 rounded-xl text-right transition-all ${
                selectedService?.id === service.id
                  ? 'bg-primary-50 border-2 border-primary-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{service.name}</span>
                <span className="text-sm text-gray-600">
                  {service.duration} دقیقه
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">
                  {service.barbers.join(' - ')}
                </span>
                <span className="font-medium text-primary-600">
                  {service.price.toLocaleString()} تومان
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <>
          {/* Barber Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
              <FiUser className="ml-2" />
              انتخاب آرایشگر
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {selectedService.barbers.map((barber) => (
                <button
                  key={barber}
                  onClick={() => setSelectedBarber(barber)}
                  className={`p-3 rounded-xl text-center transition-all ${
                    selectedBarber === barber
                      ? 'bg-primary-50 border-2 border-primary-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  {barber}
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
              <FiCalendar className="ml-2" />
              انتخاب تاریخ
            </h3>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={new Date()}
              calendarPosition="bottom-center"
              className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary-500 transition-all"
            />
          </div>

          {/* Time Selection */}
          {selectedDate && selectedBarber && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                <FiClock className="ml-2" />
                انتخاب ساعت
              </h3>
              <TimePicker
                duration={selectedService.duration}
                onTimeSelect={setSelectedTime}
                selectedTime={selectedTime}
              />
            </div>
          )}

          {/* Booking Button */}
          {selectedTime && (
            <button className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors">
              تأیید و رزرو نوبت
            </button>
          )}
        </>
      )}
    </div>
  );
}
