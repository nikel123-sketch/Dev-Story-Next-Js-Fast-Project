"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
const Banner = () => {

    const route=useRouter();
    const hendlebtn=()=>{
        const password=prompt('inter your password')
        if(password=='1234'){
            route.push('/Dasbord')

        }
        else{
            alert('incorect password')
            return
        }
    }
    return (
      <div className="border-2 bg-pink-200 text-black space-y-4 p-10">
        <h2 className="font-bold text-3xl">this is banner</h2>

        <button
        onClick={hendlebtn}
                className="
            btn 
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            text-white
            font-semibold
            px-6
            rounded-xl
        "
                >
          🚀 Share Dev
        </button>
      </div>
    );
};

export default Banner;