'use client'
import { useEffect, useState } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface TimePickerProps {
  duration: number;
  onTimeSelect: (time: string) => void;
  selectedTime: string;
}

export default function TimePicker({ duration, onTimeSelect, selectedTime }: TimePickerProps) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    const slots: TimeSlot[] = [];
    const startHour = 9; // 9 AM
    const endHour = 21; // 9 PM
    const interval = duration; // in minutes

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({
          time: timeString,
          available: Math.random() > 0.3, // Simulate availability
        });
      }
    }

    setTimeSlots(slots);
  }, [duration]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {timeSlots.map((slot, index) => (
        <button
          key={index}
          disabled={!slot.available}
          onClick={() => onTimeSelect(slot.time)}
          className={`p-3 rounded-xl text-sm transition-all ${
            selectedTime === slot.time
              ? 'bg-primary-500 text-white'
              : slot.available
                ? 'bg-gray-50 hover:bg-primary-50 text-gray-900'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
}
