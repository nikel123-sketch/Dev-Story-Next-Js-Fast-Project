
import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
      <div className="border-b-2  p-5 flex items-center justify-between">
        <Link href={'/'} className="font-bold text-2xl ">Dev Story</Link>

        <nav
          className="font-semibold flex items-center gap-2 px-8 py-3 rounded-2xl
  bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
  shadow-[0_8px_30px_rgb(0,0,0,0.5)]
  backdrop-blur-xl border border-slate-800
  ring-1 ring-white/5"
        >
          <a
            href="/About"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5
    transition-all duration-300 ease-out
    hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            About
          </a>

          <a
            href="/Dasbord"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5 transition-all duration-300
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            Dasbord
          </a>

          <a
            href="/StoriesPage"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5 transition-all duration-300
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            Stories
          </a>

          <a
            href="/Tutorius"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5 transition-all duration-300
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            Tutorius
          </a>

          <a
            href="/About/Contact"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5 transition-all duration-300
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            Contact
          </a>

          <a
            href="/About/Teams"
            className="relative text-slate-300 px-4 py-2 rounded-lg
    hover:text-white hover:bg-white/5 transition-all duration-300
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-3/4 after:-translate-x-1/2"
          >
            Teams
          </a>

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-800">
            <a
              href="/Login"
              className="text-slate-300 px-4 py-2 rounded-lg
      hover:text-white hover:bg-white/5
      transition-all duration-300"
            >
              Login
            </a>

            <a
              href="/Register"
              className="relative text-white px-5 py-2 rounded-lg
      bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600
      hover:from-indigo-600 hover:via-blue-600 hover:to-indigo-700
      shadow-lg shadow-indigo-500/20
      hover:shadow-indigo-500/40
      transition-all duration-300 hover:-translate-y-[1px]
      ring-1 ring-white/10"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    );
};

export default Navber;