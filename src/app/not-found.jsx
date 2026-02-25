"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-5">
      <h1 className="text-8xl font-bold mb-4 text-red-500 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 
                   hover:from-indigo-600 hover:via-blue-600 hover:to-indigo-700
                   shadow-lg shadow-indigo-500/30
                   transition-all duration-300 font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
