import React from "react";

const BlogTable = ({ blogs, setBlogs }) => {
  const handleTogglePublish = (id) => {
    const updated = blogs.map((blog) =>
      blog.id === id ? { ...blog, published: !blog.published } : blog
    );
    setBlogs(updated);
  };

  const handleDelete = (id) => {
    const filtered = blogs.filter((blog) => blog.id !== id);
    setBlogs(filtered);
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>
                <span
                  className={`badge ${
                    blog.published ? "badge-success" : "badge-warning"
                  } text-white`}
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              </td>
              <td className="flex justify-end gap-2">
                <button
                  onClick={() => handleTogglePublish(blog.id)}
                  className="btn btn-info btn-xs"
                >
                  {blog.published ? "Unpublish" : "Publish"}
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {blogs.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No blogs added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
