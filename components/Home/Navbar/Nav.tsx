"use client"
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'



const Nav = () => {

  const [navBg, setNavBg] = useState(false);

  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >=90) setNavBg(true)
        if(window.scrollY<90) setNavBg(false)
    };

    window.addEventListener('scroll', handler);
    return ()=>{
      window.removeEventListener('scroll', handler);
    }

  }, []);


  return (
    <div className={` fixed ${navBg ? 'bg-gray-800': ""} h-[10vh] z-[100] w-full transition-all duration-20 bg-gray-700`}>
      <div  className='flex items-center h-full justify-between w-[95%] sm:w-[90%] cl:w-[80%] mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
            <FaHouse/>
          </div>
          <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
        </div>
        {/* Nav Links */}
        <div className='lg:flex items-center space-x-14 text-white hidden'>
          {navLinks.map((navlink)=>{
            return <Link key={navlink.id} href={navlink.url}>
              <p className='font-medium hover:text-yellow-300'>{navlink.label}</p>
            </Link>
          })}
        </div>
        {/* login and burgermenu */}
        <div className='flex items-center space-x-4'>
          {/* login button */}
          <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-rose-400 transition-all duration-200'>
            <FaUserCircle className='w-5 h-5' />
            <p className='font-bold text-xs sm:text-base'>Login / Register</p>
          </div>
          {/* burger menu */}
          <HiBars3BottomRight className='sm:w-8 sm:h-6 w-6 h-6 cursor-pointer text-white lg:hidden' />
        </div>
      </div>
    </div>
  )
}
 
export default Nav 