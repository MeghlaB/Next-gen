import React from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosSecuire from '../Hooks/UseAxiosSecuire';
import { useQuery } from '@tanstack/react-query';

function Blog_Deatils() {
  const { id } = useParams();
  const axiosSecure = UseAxiosSecuire();

  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/blogs');
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

  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return <p className="text-center text-gray-500 mt-10">Blog not found</p>;
  }

  return (
    <div>
      {/* Background Image with Blur */}
      <div className="relative flex flex-col items-center pt-16 px-4">
        <div
          className="absolute inset-0 h-[600px]"
          style={{
            backgroundImage: `url(${blog.image})`,
            filter: 'blur(100px)',
            zIndex: -1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-3xl h-[550px] object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="w-full mx-auto mt-4 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 p-4 rounded-lg shadow-md text-center">
            <h3>
              Words: <span>{blog.words}</span>
            </h3>
            <h3>
              Category: <span>{blog.category}</span>
            </h3>
            <h3>
              Published Date:{' '}
              <span>{new Date().toLocaleDateString()}</span>
            </h3>
          </div>

          <div className="col-span-9">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              {blog.title}
            </h2>
            <p>{blog.blogContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog_Deatils;
