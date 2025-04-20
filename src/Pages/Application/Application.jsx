import React from "react";
import { useForm } from "react-hook-form";

function Application() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-9">
      <h2 className="text-2xl font-semibold mb-4">
        Recruiting Data Collect Form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2  gap-3 "
      >
        {/* Name* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Name*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("name", { required: true })}
            name="name"
            type="text"
          />
          {/* Error Messages */}
          {errors.name && (
            <span className="text-red-600 text-[14px]">Name is required</span>
          )}
        </div>
        {/* DateOF Birth* */}
        <div className="space-y-2 text-sm text-zinc-800">
          <label htmlFor="date" className="block font-medium">
            Date Of Birth*
          </label>
          <input
            id="date"
            placeholder="Enter your date of birth"
            {...register("date", { required: true })}
            name="date"
            type="date"
            className="flex h-10 w-full appearance-none rounded-md border px-3 py-2 pr-10 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
          />
          {/* Error Messages */}
          {errors.date && (
            <span className="text-red-600 text-[14px]">
              Date of Birth is required
            </span>
          )}
        </div>
        {/*Father's Name* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Father's Name*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("fatherName", { required: true })}
            name="fatherName"
            type="text"
          />
          {/* Error Messages */}
          {errors.fatherName && (
            <span className="text-red-600 text-[14px]">
              Father's Name is required
            </span>
          )}
        </div>
        {/*Mother's Name* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Mother's Name*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("motherName", { required: true })}
            name="motherName"
            type="text"
          />
          {/* Error Messages */}
          {errors.mothererName && (
            <span className="text-red-600 text-[14px]">
              Mother's Name is required
            </span>
          )}
        </div>

        {/*Place of birth* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Place of Birth*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("placeofbith", { required: true })}
            name="placeofbith"
            type="text"
          />
          {/* Error Messages */}
          {errors.placeofbith && (
            <span className="text-red-600 text-[14px]">
              Place of Birth is required
            </span>
          )}
        </div>

        {/* Gender selection */}
        <div className="space-y-2 text-sm text-zinc-800">
          <label htmlFor="gender" className="block font-medium">
            Gender Selection*
          </label>
          <select
            id="gender"
            {...register("gender", { required: true })}
            className="w-full h-10 rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
          >
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          {/* Error Messages */}
          {errors.gender && (
            <span className="text-red-600 text-[14px]">Gender is required</span>
          )}
        </div>
          {/* Nationality* */}
          <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Nationality*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("nationality", { required: true })}
            name="nationality"
            type="text"
          />
          {/* Error Messages */}
          {errors.nationality && (
            <span className="text-red-600 text-[14px]">Nationality is required</span>
          )}
        </div>
          {/* * */}
          <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Nationality*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter name"
            {...register("nationality", { required: true })}
            name="nationality"
            type="text"
          />
          {/* Error Messages */}
          {errors.nationality && (
            <span className="text-red-600 text-[14px]">Nationality is required</span>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Application;
