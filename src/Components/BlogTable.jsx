
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogTable = ({ blogs }) => {
  console.log(blogs)
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className=" p-5 flex flex-col "
          >
            {blog.thumbnail && (
              <img
                src={blog.thumbnail}
                alt={blog.title}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className=" h-40 object-cover mb-8  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
              />
            )}
            <div className="flex justify-between">
            <h2 className="text-[14px] font-semibold mb-1">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-1">
            
              <span className="font-medium border rounded-full p-1">{new Date().toLocaleDateString()}</span>
            </p> 
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No blogs added yet.
        </p>
      )}
    </div>
  );
};

export default BlogTable;
