"use client"
import { blog_data } from "@/Assets/assets"
import BlogItem from "./BlogItem"
import { useEffect, useState } from "react"
import axios from "axios";

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const [loader, setLoader] = useState(true)
    const BACKEND_URI="http://localhost:4000"

    const fetchBlogs = async () => {
        try {

            const response = await axios.get(`${BACKEND_URI}/blogs`);
            // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            

            const {data} = response

            console.log(data.blogs)

            setBlogs(data.blogs);
            setLoader(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }
    }






    useEffect(() => {
        fetchBlogs();
    }, [])



    const seleted = "bg-black text-white py-1 px-4 rounded-sm  "
    const nav = ["All", "Technology", "Startup", "Lifestyle"]

    return (
        <div>
            <div className="flex justify-center gap-6 my-10 ">
                {nav.map((i) => (
                    <button
                        key={i}
                        onClick={() => setMenu(i)}
                        className={menu === i ? seleted : "py-1 px-4"}
                    >
                        {i}
                    </button>
                ))}
            </div>

            { <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {
                    loader ? (
                        "Loading"
                    ) : (
                        blogs.length < 1 ? (
                            "No Post Available"
                        ) : (
                            blogs
                                .filter((item) => menu === "All" ? true : item.category === menu)
                                .map((item) => (
                                    <BlogItem
                                        key={item._id}
                                        id={item._id}
                                        title={item.title}
                                        description={item.description}
                                        category={item.category}
                                        image={`${BACKEND_URI}/uploads/${item.image}`}
                                    />
                                ))
                        )
                    )
                }
            </div> }

        </div>
    )
}

export default BlogList