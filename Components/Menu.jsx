import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
           <div className='py-5 px-5 md:px-12 lg:px-28 flex justify-between items-center'>
            <Link href="/">
            <Image src={assets.logo} width={180} alt='' className='w-[130] sm:w-auto '/></Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded hover:bg-black hover:text-white transition delay-100' >
                Get Started
            </button>
        </div>

    </div>
  )
}

export default Menu