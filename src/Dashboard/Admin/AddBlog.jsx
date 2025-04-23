import React from "react";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const AddBlogFrom= () => {

  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("blog Data:", data);
    
    const newBloginfo = {
      title: data?.title,
      category: data?.category,
      words: data?.words,
      blogContent: data?.blogContent,
      image: data?.image,
    };
    console.log(newBloginfo);
    axiosPublic.post("/add-blog", newBloginfo).then((res) => {
      console.log(res.data);
      reset()
      if (res.data.insertedId) {
        Swal.fire({
          title: "Blog Added SuccessFully",
          icon: "success",
          draggable: true,
        });
        navigate('/blog')

      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Add Blog
      </h2>

      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-2 gap-3"
        >
          {/* Title*/}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="input input-bordered w-full"
              placeholder="title"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="input input-bordered w-full"
              placeholder="category"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Words */}
          <div>
            <label className="block font-semibold mb-1">Words</label>
            <input
              type="text"
              {...register("words", { required: "Words is required" })}
              className="input input-bordered w-full"
              placeholder="Words"
            />
            {errors.words && (
              <p className="text-red-500 text-sm">{errors.words.message}</p>
            )}
          </div>

          {/* Thumbnail*/}
          {/* <div>
            <label className="block font-semibold mb-1">Thumbnail URL</label>
            <input
              {...register("thumbnail", {
                required: "Thumbnail is required",
              })}
              className="select select-bordered w-full"
            >
              
            </input>
            {errors.thumbnail && (
              <p className="text-red-500 text-sm">
                {errors.thumbnail.message}
              </p>
            )}
          </div> */}
          {/* Profile Image */}
          <div>
            <label className="block font-semibold mb-1">Image</label>
            <input
              type="url"
              {...register("image", { required: "Profile image is required" })}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Blog content */}
          <div className="col-span-2">
            <label className="block font-semibold mb-1">Blog Content</label>
            <textarea
              {...register("blogContent", { required: "Available time is required" })}
              className="input input-bordered w-full min-h-[120px]"
              placeholder="blog content"
            />
            {errors.blogContent && (
              <p className="text-red-500 text-sm">{errors.blogContent.message}</p>
            )}
          </div>
      

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogFrom;
