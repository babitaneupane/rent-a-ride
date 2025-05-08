"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function CarCard({ car, search = false }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative bg-white rounded-lg overflow-hidden border border-gray-100">
      <div className="relative h-40">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover"
        />
        <button
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={16} fill={isFavorite ? "black" : "none"} />
        </button>
      </div>

      <div className="p-3">
        <Link href={`/car/${car.id}`} className="font-medium">
          {car.name}
        </Link>

        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm">{car.rating}</span>
          <Image src="/images/star.png" alt="Rating" width={12} height={12} />
        </div>

        {car.location && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
            <Image
              src="/images/location-pin.png"
              alt="Location"
              width={12}
              height={12}
            />
            <span>{car.location}</span>
          </div>
        )}

        {!search && car.seats && (
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <Image
                src="/images/seat.png"
                alt="Seats"
                width={12}
                height={12}
              />
              <span>{car.seats} Seats</span>
            </div>
            <div className="font-medium">${car.price}/Day</div>
          </div>
        )}

        {search && (
          <div className="flex items-center justify-between mt-2">
            <div className="font-medium">${car.price}/Day</div>

            {car.hasBookNow && (
              <Link
                href={`/car/${car.id}`}
                className="bg-black text-white text-xs px-3 py-1.5 rounded-full"
              >
                Book now
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
