// AddBlogModal.jsx
import React, { useState } from "react";

const AddBlogModal = ({ setBlogs}) => {
  const [title, setTitle] = useState("");
  const [words, setWords] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(), 
      title,
      words,
      category,
      thumbnail,
      content,
    
      published: false,
    };
  
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  
    setBlogs(updatedBlogs);
    document.getElementById("add-blog-modal").checked = false;
  };
  
  return (
    <>
      {/* hidden checkbox to toggle modal */}
      <input type="checkbox" id="add-blog-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg mb-4 text-red-600"> Add New Blog</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered w-full" required />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="input input-bordered w-full" required />
            <input type="text" placeholder="Words" value={words} onChange={(e) => setWords(e.target.value)} className="input input-bordered w-full col-span-full" required />
            <input type="text" placeholder="Thumbnail URL" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} className="input input-bordered w-full col-span-full" />
            <textarea placeholder="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} className="textarea textarea-bordered w-full col-span-full min-h-[120px]" required></textarea>
            <div className="modal-action col-span-full">
              <button type="submit" className="btn btn-success btn-sm"> Submit</button>
              <label htmlFor="add-blog-modal" className="btn btn-outline btn-sm"> Cancel</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlogModal;
