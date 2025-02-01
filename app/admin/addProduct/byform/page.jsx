"use client"

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [image, setImage] = useState(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  
  const BACKEND_URI="http://localhost:4000"


const onSubmitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', titleRef.current.value);
  formData.append('description', descriptionRef.current.value);
  formData.append('category', categoryRef.current.value);
  formData.append('author', 'Alex');
  formData.append('authorImg', '/author_img.png');
  formData.append('image', image);

  try {
    const response = await axios.post(`${BACKEND_URI}/blog/byform`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data.blogData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(null);
      formRef.current.reset(); // Reset the form
    } else {
      toast.error(response.data.msg || 'Something went wrong');
    }
  } catch (error) {
    toast.error('An error occurred while submitting the form');
  }
};


  return (
    <>
      <form ref={formRef} onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-5 cursor-pointer"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={70}
            alt="Upload Thumbnail"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-5">Blog Title</p>
        <input
          ref={titleRef}
          className="mt-3 px-4 py-2 rounded border border-black"
          type="text"
          placeholder="Type here"
        />

        <p className="text-xl mt-5">Description</p>
        <textarea
          ref={descriptionRef}
          rows={6}
          className="mt-3 pr-12 pl-4 py-2 rounded border border-black"
          placeholder="Type here"
        />

        <p className="text-xl mt-5">Category</p>
        <select
          ref={categoryRef}
          defaultValue="Startup"
          className="border border-black px-3 py-2 mt-3 rounded"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <br />
        <button type="submit" className="rounded mt-8 w-40 h-12 bg-black text-white">
          Add Blog
        </button>
      </form>
    </>
  );
};

export default Page;
