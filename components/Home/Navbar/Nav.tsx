import Link from 'next/link'
import React from 'react'
import { FaHouse } from 'react-icons/fa6'

const navLinks = [
  {
    id:1,
    url:'#',
    label:"Home"
  },
  {
    id:2,
    url:'#',
    label:"Listing"
  },
  {
    id:3,
    url:'#',
    label:"Property"
  },
  {
    id:4,
    url:'#',
    label:"Blog"
  },
  {
    id:5,
    url:'#',
    label:"Contact"
  },
]

const Nav = () => {
  return (
    <div className='fixed h-[10vh] z-[100] w-full transition-all duration-200 bg-black'>
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
      </div>
    </div>
  )
}

export default Nav
