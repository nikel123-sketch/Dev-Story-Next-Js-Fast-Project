"use client";
import React from "react";

const Loding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div
        className="flex flex-col items-center gap-6 px-10 py-8 rounded-2xl 
                      bg-white/5 backdrop-blur-xl 
                      border border-white/10 
                      shadow-2xl shadow-black/40"
      >
        {/* Spinning Emoji */}
        <div className="text-6xl animate-spin">🚀</div>

        {/* Loading Text */}
        <p className="text-white text-lg font-semibold tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loding;
