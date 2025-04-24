import React from "react";
import { Mail, Phone, MapPin, PhoneCallIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

export default function ApplicationForm() {
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      dob: data.dob,
      fatherName: data.fatherName,
      motherName: data.motherName,
      nationality: data.nationality,
      gender: data.gender,
      idNumber: data.idNumber,
      maritalStatus: data.maritalStatus,
      religion: data.religion,
      profession: data.profession,
      mobile: data.mobile,
      email: data.email,
      mailingAddress: data.mailingAddress,
      permanentAddress: data.permanentAddress,
      photo: data.photo,
      cv: data.cv,
    };

    axiosPublic
      .post("/application", formData)
      .then((res) => {
        reset();
        if (res.data.insertedId) {
          Swal.fire({
            title: "Application Submitted!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Submission Failed!",
          icon: "error",
          text: "Something went wrong. Please try again.",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="relative min-h-screen text-white p-10 flex flex-col md:flex-row gap-10 overflow-hidden bg-[#0f172a]">
      {/* Blue Glowing Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[200px] opacity-25 pointer-events-none z-0"></div>

      {/* Contact Info Panel */}
      <div className="relative z-10 md:w-1/2 backdrop-blur-lg flex flex-col justify-center gap-6 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-white/90 drop-shadow-[0_0_5px_white] mb-6">
          LET’S TALK ABOUT WHAT
          <br />
          WE CAN MAKE, BUILD,
          <br />
          SCALE TOGETHER
        </h2>
        <div className="flex items-center gap-4 text-lg">
          <Phone className="text-red-500 drop-shadow-[0_0_6px_red]" />
          <span>+880 1234 567 890</span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <Mail className="text-red-500 drop-shadow-[0_0_6px_red]" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <MapPin className="text-red-500 drop-shadow-[0_0_6px_red]" />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 p-8 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Row 1 */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              {...register("name", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">Name is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Date of Birth*</label>
            <input
              type="date"
              {...register("dob", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.dob && (
              <p className="text-red-600 text-sm">Date of Birth is required</p>
            )}
          </div>

          {/* Row 2 */}
          <div>
            <label className="block mb-1 font-medium">Father’s Name*</label>
            <input
              {...register("fatherName", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.fatherName && (
              <p className="text-red-600 text-sm">Father’s Name is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Mother’s Name*</label>
            <input
              {...register("motherName", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.motherName && (
              <p className="text-red-600 text-sm">Mother’s Name is required</p>
            )}
          </div>

          {/* Row 3 */}
          <div>
            <label className="block mb-1 font-medium">Nationality*</label>
            <input
              {...register("nationality", { required: true })}
              className="w-full p-2 border rounded "
            />
            {errors.nationality && (
              <p className="text-red-600 text-sm">Nationality is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender*</label>
            <select
              {...register("gender", { required: true })}
              className="w-full p-2 border rounded bg-blue-950"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-600 text-sm">Gender is required</p>
            )}
          </div>

          {/* Row 4 */}
          <div>
            <label className="block mb-1 font-medium">
              NID/Birth/Passport No.*
            </label>
            <input
              {...register("idNumber", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.idNumber && (
              <p className="text-red-600 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Marital Status*</label>
            <select
              {...register("maritalStatus", { required: true })}
              className="w-full p-2 border rounded bg-blue-950"
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            {errors.maritalStatus && (
              <p className="text-red-600 text-sm">Marital Status is required</p>
            )}
          </div>

          {/* Row 5 */}
          <div>
            <label className="block mb-1 font-medium">Religion*</label>
            <input
              {...register("religion", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.religion && (
              <p className="text-red-600 text-sm">Religion is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Profession*</label>
            <input
              {...register("profession", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.profession && (
              <p className="text-red-600 text-sm">Profession is required</p>
            )}
          </div>

          {/* Row 6 */}
          <div>
            <label className="block mb-1 font-medium">Contact Number*</label>
            <input
              {...register("mobile", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm">Contact number is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">Email is required</p>
            )}
          </div>

          {/* Row 7 */}
          <div>
            <label className="block mb-1 font-medium">Mailing Address*</label>
            <input
              {...register("mailingAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.mailingAddress && (
              <p className="text-red-600 text-sm">
                Mailing Address is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Permanent Address*</label>
            <input
              {...register("permanentAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.permanentAddress && (
              <p className="text-red-600 text-sm">
                Permanent Address is required
              </p>
            )}
          </div>

          {/* Row 8 */}
          <div>
            <label className="block mb-1 font-medium">Photo*</label>
            <input
              type="url"
              {...register("photo", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.photo && (
              <p className="text-red-600 text-sm">Photo is required</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Upload CV*</label>
            <input
              type="url"
              
              {...register("cv", { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.cv && (
              <p className="text-red-600 text-sm">CV is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4 space-y-4">
  <button
    type="submit"
    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
  >
    Submit
  </button>

  {/* WhatsApp Button */}
 
  <a
    href="https://wa.me/6593427892"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition duration-300"
  >
    <PhoneCallIcon className="inline-block mr-2" />
    WhatsApp
  </a>
</div>
        </form>
      </div>
    </div>
  );
}
