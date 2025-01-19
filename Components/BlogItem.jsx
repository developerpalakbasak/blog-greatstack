import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({id, title, description, category, image }) => {
  return (
    <Link href={`/blogs/${id}`} >
    <div className=' max-w-[300px] sm:max-w-[300px] bg-white border border-black ' >
        
        <Image src={image} alt='' width={400} height={400} className='border-b border-black ' />
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white '>{category}</p>
        <div className='ml-5 mt-2'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900 ' >{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700 ' >{description}</p>
            <div className='inline-flex items-center py-2 font-semibold text-center gap-2 '>
                Read More <Image src={assets.arrow} alt='' width={12} />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default BlogItem