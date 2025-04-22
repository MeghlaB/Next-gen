import React, { useState } from "react";

import BlogTable from "../../Components/BlogTable";
import { motion } from "framer-motion";
import AddBlogModal from "../../Components/AddBlogForm";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6 mt-9">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          📝 Blog Management
        </motion.h2>
        <label htmlFor="add-blog-modal" className="btn btn-primary btn-sm">
          Add Blog
        </label>
      </div>

   
      <AddBlogModal blogs={blogs} setBlogs={setBlogs} />

      <BlogTable blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default ManageBlogs;
