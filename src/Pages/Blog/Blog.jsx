import React, { useState } from "react";
import AddBlogForm from "../../Components/AddBlogForm";
import BlogTable from "../../Components/BlogTable";


const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">📝 Blog Management</h2>
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

