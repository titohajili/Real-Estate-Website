import React from 'react'
import { navLinks } from '@/constant/constant'
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type  Props = {
  showNav: boolean,
  closeNav:()=>void
}

const MobileNav = ({showNav, closeNav}: Props) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';
  return (
    <div>
      {/* Overlay */}
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70  w-full h-screen`}></div>
      {/* navLink */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000] `}>
        {navLinks.map((navLink)=>{
            return (
            <Link key={navLink.id} href={navLink.url}>
              <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>{navLink.label}</p>
            </Link>
            );
          })}
        {/* Close button */}
        <CgClose onClick={closeNav} className='absolute top-[.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white '/>
      </div>
    </div>
  )
}

export default MobileNav
