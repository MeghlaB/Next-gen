import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog_Deatils = () => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = blogs.find((blog) => blog.id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center mt-10 text-gray-600">Blog not found.</div>
    );
  }

  return (
    <div className="">
      <div className="relative flex flex-col items-center pt-16 px-4">
        <div
          className="absolute inset-0 h-[600px] object-cover"
          style={{
            backgroundImage: `url(${blog.thumbnail})`,
            filter: "blur(100px)",
            zIndex: -1,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

   
        <img
          src={blog.thumbnail}
          alt={''}
          className="w-full max-w-3xl h-[550px] object-cover"
        />
      </div>

   <div className="w-full mx-auto mt-4 bg-white">
   <h1 className="text-4xl font-bold text-white text-center">
        {blog.title}
      </h1>
      <p className="text-sm text-gray-200 mt-2">
        Published on: <span className="font-medium">{blog.publishedDate}</span>
      </p>

      {/* Content section */}
      <div className=" p-6 mt-10 rounded-xl shadow-lg max-w-4xl w-full">
        <p className="text-lg font-medium text-gray-700 mb-3">
          Category: <span className="text-blue-500">{blog.category}</span>
        </p>
        <p className="text-gray-800 mb-4 italic">{blog.description}</p>
        <hr className="my-4" />
        <div className="text-gray-900 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
   </div>
    </div>
  );
};

export default Blog_Deatils;
