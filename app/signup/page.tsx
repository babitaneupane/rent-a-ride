"use client";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
            🚗
          </div>
          <span className="text-lg text-black font-bold">Rent-a-ride</span>
        </div>

        <div>
          <h2 className="text-2xl text-black font-bold">Welcome Back</h2>
          <p className="text-lg text-gray-700">Ready to hit the road.</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email/Phone Number"
            className="w-full border text-black rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border text-black rounded-md px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-black"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            ></div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-black gap-2">
              <input type="checkbox" className="form-checkbox text-black" />
              Remember Me
            </label>
            <a href="#" className="text-gray-700 font-medium">
              Forgot Password
            </a>
          </div>

          <button className="w-full bg-blue-400 border-2 border-black text-white py-3 rounded-full font-bold hover:bg-blue-300">
            Login
          </button>

          <button className="w-full py-3 border-2 border-black bg-blue-400 rounded-full font-bold hover:bg-blue-300">
            Signup
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold underline">
            Sign Up.
          </a>
        </p>
      </div>
    </div>
  );
}
