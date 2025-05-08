"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowLeft,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react";
import CarCard from "@/components/CarCard";
import BrandFilter from "@/components/BrandFilter";
import BottomNavigation from "@/components/BottomNavigation";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const brands = [
    { id: 0, name: "ALL", logo: "/images/brands/all.png" },
    { id: 1, name: "Ferrari", logo: "/images/brands/ferrari.png" },
    { id: 2, name: "Tesla", logo: "/images/brands/tesla.png" },
    { id: 3, name: "BMW", logo: "/images/brands/bmw.png" },
    { id: 4, name: "Lamborghini", logo: "/images/brands/lamborghini.png" },
  ];

  const recommendedCars = [
    {
      id: 1,
      name: "Tesla Model S",
      image: "/images/cars/tesla-model-s.jpg",
      rating: 5.0,
      location: "Chicago, USA",
      price: 100,
      hasBookNow: true,
    },
    {
      id: 2,
      name: "Ferrari LaFerrari",
      image: "/images/cars/ferrari-laferrari.jpg",
      rating: 5.0,
      location: "Washington DC",
      price: 100,
      hasBookNow: true,
    },
    {
      id: 3,
      name: "Lamborghini Aventador",
      image: "/images/cars/lamborghini-aventador.jpg",
      rating: 4.9,
      location: "Washington DC",
      price: 100,
      hasBookNow: true,
    },
    {
      id: 4,
      name: "BMW GT3 M2",
      image: "/images/cars/bmw-gt3-m2.jpg",
      rating: 5.0,
      location: "New York, USA",
      price: 100,
      hasBookNow: true,
    },
  ];

  const popularCars = [
    {
      id: 5,
      name: "Ferrari LaFerrari",
      image: "/images/cars/ferrari-laferrari-white.jpg",
      rating: 5.0,
      price: 100,
      hasBookNow: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col pb-16">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/home">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="font-bold text-xl">Search</h1>
        </div>

        <Link href="#">
          <MoreVertical size={24} />
        </Link>
      </div>

      <div className="px-4 mb-6 flex items-center gap-2">
        <div className="relative flex-1">
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

        <Link href="/filters" className="bg-gray-100 p-3 rounded-lg">
          <SlidersHorizontal size={20} />
        </Link>
      </div>

      <div className="px-4 mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {brands.map((brand) => (
            <BrandFilter key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Recommend For You</h2>
          <Link href="/recommended" className="text-sm text-gray-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendedCars.map((car) => (
            <CarCard key={car.id} car={car} search />
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Our Popular Cars</h2>
          <Link href="/popular" className="text-sm text-gray-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} search />
          ))}
        </div>
      </div>

      <BottomNavigation activeTab="search" />
    </main>
  );
}
