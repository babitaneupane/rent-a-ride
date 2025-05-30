"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MoreVertical } from "lucide-react";

export default function BookingPage({ params }) {
  const [bookWithDriver, setBookWithDriver] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [rentalTime, setRentalTime] = useState("day");
  const [pickupDate, setPickupDate] = useState("19/January/2024");
  const [returnDate, setReturnDate] = useState("22/January/2024");
  const [location, setLocation] = useState("Shore Dr, Chicago 0062 Usa");

  const rentalTimeOptions = [
    { id: "hour", name: "Hour" },
    { id: "day", name: "Day" },
    { id: "weekly", name: "Weekly" },
    { id: "monthly", name: "Monthly" },
  ];

  const genderOptions = [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" },
    { id: "others", name: "Others" },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <Link href={`/car/${params.id}`}>
          <ArrowLeft size={24} />
        </Link>
        <h1 className="font-bold text-xl">Booking Details</h1>
        <Link href="#">
          <MoreVertical size={24} />
        </Link>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <span className="font-medium">Booking details</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className="text-gray-400">Payment methods</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className="text-gray-400">confirmation</span>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-auto">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Book with driver</h3>
              <p className="text-sm text-gray-500">
                Dont have a driver? book with driver.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={bookWithDriver}
                onChange={() => setBookWithDriver(!bookWithDriver)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name*"
              className="input-field pl-10"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Image
              src="/images/user.png"
              alt="User"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address*"
              className="input-field pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Image
              src="/images/email.png"
              alt="Email"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder="Contact*"
              className="input-field pl-10"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Image
              src="/images/phone.png"
              alt="Phone"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Gender</h3>
          <div className="flex gap-3">
            {genderOptions.map((option) => (
              <button
                key={option.id}
                className={`px-6 py-2 rounded-full text-sm ${
                  gender === option.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black"
                }`}
                onClick={() => setGender(option.id)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Rental Date &Time</h3>
          <div className="flex gap-3">
            {rentalTimeOptions.map((option) => (
              <button
                key={option.id}
                className={`px-6 py-2 rounded-full text-sm ${
                  rentalTime === option.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black"
                }`}
                onClick={() => setRentalTime(option.id)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="text-sm mb-2">Pick up Date</h3>
            <div className="relative">
              <input
                type="text"
                value={pickupDate}
                readOnly
                className="input-field pr-10"
              />
              <Image
                src="/images/calendar.png"
                alt="Calendar"
                width={20}
                height={20}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm mb-2">Return Date</h3>
            <div className="relative">
              <input
                type="text"
                value={returnDate}
                readOnly
                className="input-field pr-10"
              />
              <Image
                src="/images/calendar.png"
                alt="Calendar"
                width={20}
                height={20}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Car Location</h3>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field pl-10"
            />
            <Image
              src="/images/location.png"
              alt="Location"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <Link
          href="/payment"
          className="btn-primary flex items-center justify-center"
        >
          $1400 Pay Now
        </Link>
      </div>
    </main>
  );
}
