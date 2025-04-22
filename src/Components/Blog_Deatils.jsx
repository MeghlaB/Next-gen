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
    <div>
      {/* Background Image with Blur */}
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
          alt={""}
          className="w-full max-w-3xl h-[550px] object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="w-full mx-auto mt-4 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column (for blog content or sidebar) */}
          <div className="col-span-3  p-4 rounded-lg shadow-md text-center ">
            <h3 > 
               Words : <span className=" ">{blog.words}</span> 
               
            </h3>
            <h3 > 
               Category : <span className=" ">{blog.category}</span> 
            </h3>
            <h3 > 
               PublishedDate : <span className="">{new Date().toLocaleDateString()}</span> 
            </h3>

            
          </div>

       
          <div className="col-span-9 ">
            <h2 className="text-3xl font-semibold mb-4 text-gray-300">{blog.title}</h2>
            <p className=" ">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Deatils;
