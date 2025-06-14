"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DatePicker() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2022, 0)); // January 2022
  const [selectedDate, setSelectedDate] = useState<number>(6); // 6th of January

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate days for the calendar
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const prevMonthDays = getDaysInMonth(year, month - 1);

  interface CalendarDay {
    day: number;
    isCurrentMonth: boolean;
    isPrevMonth?: boolean;
    isNextMonth?: boolean;
  }

  const days: CalendarDay[] = [];

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
    });
  }

  // Next month days
  const remainingDays = 42 - days.length; // 6 rows of 7 days
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      isNextMonth: true,
    });
  }

  // Format month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedMonth = `${monthNames[month]} ${year}`;

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button onClick={prevMonth} className="p-1">
            <ChevronLeft size={20} />
          </button>
          <h3 className="font-medium">{formattedMonth}</h3>
          <button onClick={nextMonth} className="p-1">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value="10 : 30"
              className="w-16 text-center bg-black text-white py-1 px-2 rounded-md"
              readOnly
            />
            <span className="text-sm">am</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value="05 : 30"
              className="w-16 text-center bg-white border py-1 px-2 rounded-md"
              readOnly
            />
            <span className="text-sm">pm</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <button
            key={index}
            className={`h-8 w-8 flex items-center justify-center rounded-full text-sm ${
              day.isCurrentMonth
                ? day.day === selectedDate
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
                : "text-gray-400"
            }`}
            onClick={() => day.isCurrentMonth && setSelectedDate(day.day)}
          >
            {day.day}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border border-gray-300 rounded-full">
          Cancel
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-full">
          Done
        </button>
      </div>
    </div>
  );
}
