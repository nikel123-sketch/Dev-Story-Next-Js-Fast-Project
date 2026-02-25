'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from '../NavLink/NavLink';

const Navber = () => {
  const pathname=usePathname();
  // console.log(pathname)
  if(pathname.startsWith('/Dasbord')) return<></>
    return (
      <div className="border-b-2  p-5 flex items-center justify-between">
        <Link href={"/"} className="font-bold text-2xl ">
          Dev Story
        </Link>

        <nav className='flex gap-3'>
          <NavLink href="/About">About</NavLink>

          <NavLink href="/Dasbord">Dasbord</NavLink>

          <NavLink href="/StoriesPage">Stories</NavLink>

          <NavLink href="/Tutorius">Tutorius</NavLink>

          <NavLink href="/About/Contact">Contact</NavLink>

          <NavLink href="/About/Teams">Teams</NavLink>

          <NavLink href="/Login">Login</NavLink>

          <NavLink href="/Register">Register</NavLink>
        </nav>
      </div>
    );
};

export default Navber;