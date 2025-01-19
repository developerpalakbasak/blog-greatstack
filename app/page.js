"use client"

import Header from "@/Components/Header";
import BlogItem from "@/Components/BlogItem";
import Image from "next/image";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  );
}
