import Image from "next/image";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="relative h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/plain-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="p-6 pt-10">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Lets Start
            <br />A New Experience
            <br />
            With Car rental.
          </h1>

          <p className="text-gray-200 mb-8 max-w-md">
            Discover your next adventure with Qent. were here to provide you
            with a seamless car rental experience. Lets get started on your
            journey.
          </p>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>

          <Link href="/login" className="btn-primary max-w-md text-center">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
