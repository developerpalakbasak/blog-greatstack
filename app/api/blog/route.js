import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/Blogmodel";
import { writeFile } from "fs/promises"
import fs from "fs/promises"
import { NextResponse } from "next/server";
import multer from "multer";
import { promisify } from "util";

const LoadDB = async () => {

    await ConnectDB();
}

LoadDB();


// config multer
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        return cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage, })






// API Endpoint to get blog
export async function GET(req) {


    const blogId = req.nextUrl.searchParams.get("id");

    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog)
    }
    else {
        const blogs = await BlogModel.find({});
        const count = blogs.length;

        return NextResponse.json({ success: true, count, blogs }, { status: 200 })
    }




}






// // API Endpoint to create blog
export async function POST(req) {

    const formData = await req.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get("title")}`,
        description: `${formData.get("description")}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get("authorImg")}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved")

    return NextResponse.json({ success: true, msg: "Blog Added" }, { status: 201 })
}






// API Endpoint to delete blog
export async function DELETE(req) {

    const id = await req.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);
    if (blog) {

        // await fs.unlink(`./public${blog.image}`)
        await BlogModel.findByIdAndDelete(id);
        return NextResponse.json({ success: true, msg: "Blog Deleted" }, { status: 200 })

    }
    return NextResponse.json({ success: false, msg: "Blog Not Found" }, { status: 404 })



}