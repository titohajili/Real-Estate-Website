import React from 'react'
import { navLinks } from '@/constant/constant'
import Link from 'next/link';

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className='transform fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70  w-full h-screen'></div>
      {/* navLink */}
      <div className='text-white transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000] '>
        {navLinks.map((navLink)=>{
            return (
            <Link key={navLink.id} href={navLink.url}>
              <p className='text-[20px] ml-12 border-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>{navLink.label}</p>
            </Link>
            );
          })}
      </div>
    </div>
  )
}

export default MobileNav
