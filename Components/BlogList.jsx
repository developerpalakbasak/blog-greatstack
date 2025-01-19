import { blog_data } from "@/Assets/assets"
import BlogItem from "./BlogItem"
import { useState } from "react"

const BlogList = () => {

const [menu, setMenu] = useState("All")
const seleted = "bg-black text-white py-1 px-4 rounded-sm  " 

    return (
        <div>
            <div className="flex justify-center gap-6 my-10 ">
                <button onClick={()=> setMenu("All")} className={menu =="All" ? seleted : "py-1 px-4"}>All</button>
                <button onClick={()=> setMenu("Technology")} className={menu =="Technology" ? seleted : "py-1 px-4"} >Technology</button>
                <button onClick={()=> setMenu("Startup")} className={menu =="Startup" ? seleted : "py-1 px-4"} >Startup</button>
                <button onClick={()=> setMenu("Lifestyle")} className={menu =="Lifestyle" ? seleted : "py-1 px-4"} >Lifestyle</button>
            </div>

            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 ">
                {blog_data.filter((item)=> menu==="All"?true:item.category==menu).map((item) => {
                    return <BlogItem key={item.id} id={item.id} title={item.title} description={item.description} category={item.category} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default BlogList