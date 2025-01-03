import React from "react";
import BlogCard from "../components/blogcart";


export default function mega() {
  const posts = [
    {
      id: "1",
      title: "Static Resume",
      description: "Simple Static Resume build by using HTML & CSS",
      date: "2024-11-28",
      imageUrl: "../images/projectt1.png",
    },
    {
      id: "2",
      title: "Shareable Resume builder",
      description: "Shareable Resume builder by using HTML , CSS & Typescript.",
      date: "2024-11-28",
      imageUrl: "../images/projectt2.png",
    },
    {
      id: "3",
      title: "Governor Initiative Website",
      description:
        "The Governor House Initiative website clone developed by using Next.js and Tailwind CSS.",
      date: "2024-11-28",
      imageUrl: "../images/governorweb.webp",
    },
    {
      id: "4",
      title: "Amazon website clone",
      description: "Amazon website clone developed by using html and CSS.",
      date: "2024-11-28",
      imageUrl: "../images/project4.png",
    },
    {
      id: "5",
      title: "Portfolio",
      description: "Portfolio build by using Next.js and tailwind CSS.",
      date: "2024-11-28",
      imageUrl: "../images/project5.png",
    },
    {
      id: "6",
      title: "Portfolio",
      description: "Portfolio build by using Next.js and Custom CSS.",
      date: "2024-11-28",
      imageUrl: "../images/Screenshot 2025-01-02 184713.png",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in " key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
