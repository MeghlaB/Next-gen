import React from "react";
import { useNavigate } from "react-router-dom";
import UseAxiosSecuire from "../Hooks/UseAxiosSecuire";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const BlogTable = () => {
  const axiosSecure = UseAxiosSecuire();
  const navigate = useNavigate();

  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
   
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blogs");
      // console.log(res.data)
      return res.data;
    },
  });

 

 

  if (isLoading) {
    return <p className="text-center text-gray-500 mt-10">Loading blogs...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error fetching blogs: {error.message}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className=" rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
            onClick={() => navigate(`/blogs/${blog._id}`)}
          >
            {blog?.image ? (
              <img
                src={blog?.image}
                alt={blog.title}
                className=" w-full h-40 object-cover mb-8  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
 
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded mb-4">
                <span className="text-gray-400">No Image</span>
              </div>
            )}

           <div className="flex items-center justify-between ">
           <h2 className="text-lg font-semibold mb-2">{blog?.title}</h2>
            <p className="text-sm text-gray-500 mb-2 border rounded-full">
              {new Date(blog.date || Date.now()).toLocaleDateString()}
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
