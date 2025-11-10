import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'


const Fotter = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1px] border-white border-opacity-20'>
        <div>
           <div className='flex items-center space-x-2'>
              <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
                <FaHouse/>
              </div>
              <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
             </div>
             <p className='text-gray-300 mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates.</p>
             <p className='text-gray-300 mt-4 font-semibold'>maqatito963@gmail.com</p>      
             <p className='text-gray-300 mt-2 font-semibold'>+994-99-868-62-00</p>
             {/* social links */}
             <div className='flex items-center space-x-4 mt-6'>
              <FaFacebook className='w-6 h-6 text-blue-600' />
              <FaTwitter className='w-6 h-6 text-sky-500' />
              <FaYoutube className='w-6 h-6 text-red-700' />
              <FaInstagram className='w-6 h-6 text-pink-600' />
             </div>
        </div>
        {/* 2nd part */}
        <div className='md:mx-auto'>
          <h1 className='text-lg text-white font-bold mb-4'>Popular Search</h1>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Appartment For Rent</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Appartment Low to High</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Offices For Buy</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Offices For Rent</p>
        </div>
        {/* 3rd part */}

        <div className='md:mx-auto'>
          <h1 className='text-lg text-white font-bold mb-4'>Quick Link</h1>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Terms pf use</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Privacy Policy</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Pricing Plans</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Our Services</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Contact Support</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Careers</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>FAQs</p>
        </div>
        {/* 4th part */}
        <div className='md:mx-auto'>
          <h1 className='text-lg text-white font-bold mb-4'>Discover</h1>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Miami</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Los Angeles</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>New York</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>Chicago</p>
          <p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit'>London</p>
        </div>
      </div>
    </div>
  )
}

export default Fotter
