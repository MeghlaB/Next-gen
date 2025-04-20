import React, { useState } from "react";
import AddBlogForm from "../../Components/AddBlogForm";
import BlogTable from "../../Components/BlogTable";
import { motion } from 'framer-motion';

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6 mt-9">
      <motion.h2
      className="text-3xl font-bold text-gray-800"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.7, ease:'easeIn' }}   
    >
      📝 Blog Management
    </motion.h2>
        <button
          onClick={() => setIsAdding(true)}
          className="btn btn-primary btn-sm"
        >
          + Add Blog
        </button>
      </div>

      {isAdding && (
        <AddBlogForm
          setIsAdding={setIsAdding}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      )}

      <BlogTable blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default ManageBlogs;

