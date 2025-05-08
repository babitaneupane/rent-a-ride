"use client";

import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="w-full px-8 py-6 flex justify-between items-center z-20 relative bg-black/60 backdrop-blur-sm">
        <div className="text-2xl font-bold">Qent</div>
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
          <Link href="/login" className="hover:text-purple-400 transition">
            Login
          </Link>
        </nav>
      </header>

      {/* Background Image: starts below topbar */}
      <div className="relative z-0 w-full h-[calc(100vh-80px)]">
        <Image
          src="/images/welcome-bg.jpg"
          alt="Luxury car background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Foreground Content on top of background */}
      <div className="absolute top-[80px] left-0 right-0 bottom-0 z-10 flex flex-col">
        <div className="p-6">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Qent Logo"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end p-6 pb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Welcome to
            <br />
            Qent
          </h1>

          <Link
            href="/onboarding"
            className="btn-primary max-w-md text-center cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
