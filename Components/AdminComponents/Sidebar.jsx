import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100' >
            <Link href="/" className='px-2 sm:pl-14 py-3 border border-black '>
               
                <Image src={assets.logo} width={120} alt='' />
            </Link>

            <div className='w-28 sm:w-80 flex flex-col gap-4 h-[100vh] relative pl-10 py-12 border border-black '>
                <Link href="/admin/addProduct" className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] '>
                    <Image src={assets.add_icon} alt='' width={28} />
                    <p>Add Blogs</p>
                </Link>
                <Link href="/admin/blogList"  className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] '>
                    <Image src={assets.blog_icon} alt='' width={28} />
                    <p>Blogs List</p>
                </Link>
                <Link href="/admin/subscription"  className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] '>
                    <Image src={assets.email_icon} alt='' width={28} />
                    <p>Subscription</p>
                </Link>

            </div>


        </div>
    )
}

export default Sidebar