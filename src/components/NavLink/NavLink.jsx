import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname=usePathname();
     
    // console.log(pathname,href)
  return (
    <Link
      className={`${pathname===(href) && "bg-teal-300 rounded-md font-bold text-black underline "}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;