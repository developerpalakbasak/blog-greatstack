"use client";
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blog = ({ params }) => {
    const [data, setData] = useState(null);

    // Unwrap the params object
    const unwrappedParams = React.use(params);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(unwrappedParams.id) === blog_data[i].id) {
                setData(blog_data[i]);
                break;
            }
        }
    };

    useEffect(() => {
        fetchBlogData();
        console.log(data);

    }, [unwrappedParams]);

    return (data ? <>
        <div className='bg-gray-200 py-5 md:px-12 lg:px-28'>
            <div className="flex justify-between items-center ">
                <Link href="/">
                    <Image src={assets.logo} width={180} alt='' className='w-[130] sm:w-auto ' />
                </Link>

                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded hover:bg-black hover:text-white transition delay-100' >Get Started</button>
            </div>
            <div className="text-center my-24">
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img
                } width={60} height={60} alt='' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto '>{data.author}</p>
            </div>

            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-80px] mb-10 '>
                <Image className='border-4 border-white ' src={data.image} width={1280} height={720} alt='' />

                <h1 className='my-8 text-[26px] font-semibold '>Introduction:</h1>
                <p>{data.description}</p>
            </div>
            <div>
                <h4 className='font-semibold'>Share this article on socila media</h4>
                <div className='flex gap-3 my-3 '>
                    <Image alt='' src={assets.facebook_icon} />
                    <Image alt='' src={assets.twitter_icon} />
                    <Image alt='' src={assets.googleplus_icon} />
                </div>
            </div>
            <Footer />
        </div>
    </> : <>
        <div className='flex justify-center items-center mt-[100px]'>

            <h1>Loading......</h1>
        </div>

    </>
    );
};

export default Blog;
