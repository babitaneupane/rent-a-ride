"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Bell } from "lucide-react";
import CarCard from "@/components/CarCard";
import BrandButton from "@/components/BrandButton";
import BottomNavigation from "@/components/BottomNavigation";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const brands = [
    { id: 1, name: "Tesla", logo: "/images/brands/tesla.png" },
    { id: 2, name: "Lamborghini", logo: "/images/brands/lamborghini.png" },
    { id: 3, name: "BMW", logo: "/images/brands/bmw.png" },
    { id: 4, name: "Ferrari", logo: "/images/brands/ferrari.png" },
  ];

  const bestCars = [
    {
      id: 1,
      name: "Ferrari-FF",
      image: "/images/cars/ferrari-ff.jpg",
      rating: 5.0,
      location: "Washington DC",
      seats: 4,
      price: 200,
    },
    {
      id: 2,
      name: "Tesla Model S",
      image: "/images/cars/tesla-model-s.jpg",
      rating: 5.0,
      location: "Chicago, USA",
      seats: 5,
      price: 100,
    },
  ];

  const nearbyCars = [
    {
      id: 3,
      name: "Hyundai Elantra",
      image: "/images/cars/hyundai-elantra.jpg",
      rating: 4.8,
      location: "New York, USA",
      seats: 5,
      price: 80,
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col pb-16">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Qent Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">Qent</span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/notifications" className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
          <Link href="/profile">
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your dream car...."
            className="input-field pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="px-4 mb-6">
        <h2 className="font-bold text-lg mb-4">Brands</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {brands.map((brand) => (
            <BrandButton key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">Best Cars</h2>
          <Link href="/cars" className="text-sm text-gray-500">
            View All
          </Link>
        </div>
        <p className="text-sm text-gray-500 mb-4">Available</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">Nearby</h2>
          <Link href="/nearby" className="text-sm text-gray-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nearbyCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </main>
  );
}
