import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center flex-col sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white px-5'>All right reserved</p>
        <div className="flex gap-3">
            <Image src={assets.facebook_icon} alt='' width={40} />
            <Image src={assets.twitter_icon} alt='' width={40} />
            <Image src={assets.googleplus_icon} alt='' width={40} />
        </div>
    </div>
  )
}

export default Footer