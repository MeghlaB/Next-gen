import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';
function Application() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });
  };

  return (
  <div className="max-w-5xl mx-auto ">
      <div className="  p-6 bg-white rounded-xl shadow mt-9 border-t-8 border-t-amber-900 border-b-8 border-b-amber-900 mb-6 pb-5 ">
      <motion.h2
      className="text-2xl font-semibold mb-4 text-center pb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      Application Form
    </motion.h2>
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
          {errors.mothereName && (
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
            placeholder="palce of birth"
            {...register("placeofbirth", { required: true })}
            name="placeofbirth"
            type="text"
          />
          {/* Error Messages */}
          {errors.placeofbirth && (
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
            placeholder="nationality"
            {...register("nationality", { required: true })}
            name="nationality"
            type="text"
          />
          {/* Error Messages */}
          {errors.nationality && (
            <span className="text-red-600 text-[14px]">
              Nationality is required
            </span>
          )}
        </div>
        {/*  NIRC/Birth/Passport number * */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            NIRC/Birth/Passport number*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="nirc/birth/passport number"
            {...register("nbpNumber", { required: true })}
            name="nbpNumber"
            type="text"
          />
          {/* Error Messages */}
          {errors.nbpNumber && (
            <span className="text-red-600 text-[14px]">
              {" "}
              NIRC/Birth/Passport number is required
            </span>
          )}
        </div>
        {/* Religion* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Religion*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter religion"
            {...register("religion", { required: true })}
            name="religion"
            type="text"
          />
          {/* Error Messages */}
          {errors.religion && (
            <span className="text-red-600 text-[14px]">
              Religion is required
            </span>
          )}
        </div>
        {/* Marital Status */}
        <div className="space-y-2 text-sm text-zinc-800">
          <label htmlFor="gender" className="block font-medium">
            Marital Status*
          </label>
          <select
            id="marital"
            {...register("marital", { required: true })}
            className="w-full h-10 rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
          >
            <option value="">Select Marital</option>
            <option value="single">Single</option>
            <option value="Married">Married</option>
            <option value="other">Other</option>
          </select>

          {/* Error Messages */}
          {errors.marital && (
            <span className="text-red-600 text-[14px]">
              Marital Status is required
            </span>
          )}
        </div>

        {/* Current Profession* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Current Profession*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter current profession"
            {...register("current", { required: true })}
            name="current"
            type="text"
          />
          {/* Error Messages */}
          {errors.current && (
            <span className="text-red-600 text-[14px]">
              Current Profession is required
            </span>
          )}
        </div>
        {/* Contact Number* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Contact Number*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter contact number"
            {...register("contact", { required: true })}
            name="contact"
            type="number"
          />
          {/* Error Messages */}
          {errors.contact && (
            <span className="text-red-600 text-[14px]">
              Contact Number is required
            </span>
          )}
        </div>

        {/* Email* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Email*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter email"
            {...register("email", { required: true })}
            name="email"
            type="email"
          />
          {/* Error Messages */}
          {errors.email && (
            <span className="text-red-600 text-[14px]">Email is required</span>
          )}
        </div>

        {/* Malling Address* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Mailing Address*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter Mailling address"
            {...register("mailling", { required: true })}
            name="mailling"
            type="text"
          />
          {/* Error Messages */}
          {errors.mailling && (
            <span className="text-red-600 text-[14px]">
              Malling Address is required
            </span>
          )}
        </div>
        {/* Parmanent Address* */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Parmanent Address*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter Parmanent address"
            {...register("parmanent", { required: true })}
            name="parmanent"
            type="text"
          />
          {/* Error Messages */}
          {errors.parmanent && (
            <span className="text-red-600 text-[14px]">
              Parmanent Address is required
            </span>
          )}
        </div>
        {/*photoUrl */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Photo*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter Photo-Url"
            {...register("photo", { required: true })}
            name="photo"
            type="url"
          />
          {/* Error Messages */}
          {errors.photo && (
            <span className="text-red-600 text-[14px]">Photo is required</span>
          )}
        </div>
        {/*NRIC Photo */}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            NRIC Photo*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="Enter NRIC Photo"
            {...register("nircphoto", { required: true })}
            name="nircphoto"
            type="file"
          />
          {/* Error Messages */}
          {errors.nircphoto && (
            <span className="text-red-600 text-[14px]">
              NIRC Photo is required
            </span>
          )}
        </div>

        {/*upload Cv*/}
        <div className="space-y-2 text-sm text-zinc-800 ">
          <label htmlFor="username_2" className="block font-medium">
            Upload CV*
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="username_2"
            placeholder="File chooise"
            {...register("cv", { required: true })}
            name="cv"
            type="file"
          />
          {/* Error Messages */}
          {errors.cv && (
            <span className="text-red-600 text-[14px]">
              Upload CV is required
            </span>
          )}
        </div>

        
<div className="col-span-2">
  <motion.button
    type="submit"
    className="bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded mt-4"
    initial={{ opacity: 0, y: -50 }}    
    animate={{ opacity: 1, y: 0 }}     
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} 
    whileHover={{ scale: 1.05 }}       
    whileTap={{ scale: 0.95 }}       
  >
    Submit
  </motion.button>
</div>
      </form>
    </div>
  </div>
  );
}

export default Application;
