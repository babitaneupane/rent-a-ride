"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="p-6 pt-10">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Qent Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">Qent</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-8">Sign Up</h1>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div>
              <input
                type="text"
                placeholder="Country"
                className="input-field"
              />
            </div>

            <button type="button" className="btn-primary">
              Sign up
            </button>

            <button type="button" className="btn-secondary">
              Login
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 absolute w-full"></div>
              <span className="bg-white px-2 relative text-gray-500 text-sm">
                Or
              </span>
            </div>

            <button
              type="button"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Image
                src="/images/apple-logo.png"
                alt="Apple"
                width={20}
                height={20}
              />
              Apple pay
            </button>

            <button
              type="button"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Image
                src="/images/google-logo.png"
                alt="Google"
                width={20}
                height={20}
              />
              Google Pay
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-black font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
