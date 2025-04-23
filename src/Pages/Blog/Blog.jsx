import React, { useState } from "react";

import BlogTable from "../../Components/BlogTable";
import { motion } from "framer-motion";
import AddBlogModal from "../../Components/AddBlogForm";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      

      <BlogTable blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default ManageBlogs;
