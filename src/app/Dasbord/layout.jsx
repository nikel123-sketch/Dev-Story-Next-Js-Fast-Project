
import Link from 'next/link';
import React from 'react';

const DashbordLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-3  border-r-1 min-h-screen">
        <Link href={"/"} className="font-bold text-5xl">
          Dev Story
        </Link>
        <hr />
        
        <div className="flex flex-col mt-5 gap-3">
          <Link
            className="w-full bg-sky-300 text-black font-bold "
            href={"/Dasbord/Add-Story"}
          >
            Add Story
          </Link>
          <Link
            className="w-full bg-sky-300 text-black font-bold "
            href={"/Dasbord/MyProfile"}
          >
            My-Profile
          </Link>
          <Link
            className="w-full bg-sky-300 text-black font-bold "
            href={"/Dasbord/Setting"}
          >
            Setting
          </Link>
        </div>
      </div>

      <div className="col-span-9 ">{children}</div>
    </div>
  );
};

export default DashbordLayout;