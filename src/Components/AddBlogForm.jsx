import React, { useState } from "react";

const AddBlogForm = ({ setIsAdding, blogs, setBlogs }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      category,
      thumbnail,
      content,
      published: false,
    };
    setBlogs([...blogs, newBlog]);
    setIsAdding(false);
  };

  return (
    <div className="bg-base-100 shadow-md p-6 rounded-xl mb-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="input input-bordered w-full col-span-full"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full col-span-full min-h-[100px]"
          required
        ></textarea>
        <div className="flex gap-3 mt-4 col-span-full">
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
          <button type="button" onClick={() => setIsAdding(false)} className="btn btn-outline btn-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
