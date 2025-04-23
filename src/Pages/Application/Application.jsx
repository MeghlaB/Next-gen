import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-10 gap-10 bg-gray-50">
      {/* Left: Contact Info */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Get In Touch</h2>
        <div className="flex items-center gap-4">
          <Phone className="text-blue-600" />
          <span className="text-lg">+880 1234 567 890</span>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="text-blue-600" />
          <span className="text-lg">info@example.com</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="text-blue-600" />
          <span className="text-lg">Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input {...register('name', { required: true })} className="w-full p-2 border rounded" />
            {errors.name && <p className="text-red-600 text-sm">Name is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Date of Birth*</label>
            <input type="date" {...register('dob', { required: true })} className="w-full p-2 border rounded" />
            {errors.dob && <p className="text-red-600 text-sm">Date of Birth is required</p>}
          </div>

          {/* Row 2 */}
          <div>
            <label className="block mb-1 font-medium">Father’s Name*</label>
            <input {...register('fatherName', { required: true })} className="w-full p-2 border rounded" />
            {errors.fatherName && <p className="text-red-600 text-sm">Father’s Name is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Mother’s Name*</label>
            <input {...register('motherName', { required: true })} className="w-full p-2 border rounded" />
            {errors.motherName && <p className="text-red-600 text-sm">Mother’s Name is required</p>}
          </div>

          {/* Row 3 */}
          <div>
            <label className="block mb-1 font-medium">Nationality*</label>
            <input {...register('nationality', { required: true })} className="w-full p-2 border rounded" />
            {errors.nationality && <p className="text-red-600 text-sm">Nationality is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender*</label>
            <select {...register('gender', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-600 text-sm">Gender is required</p>}
          </div>

          {/* Row 4 */}
          <div>
            <label className="block mb-1 font-medium">NID/Birth/Passport No.*</label>
            <input {...register('idNumber', { required: true })} className="w-full p-2 border rounded" />
            {errors.idNumber && <p className="text-red-600 text-sm">This field is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Marital Status*</label>
            <select {...register('maritalStatus', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            {errors.maritalStatus && <p className="text-red-600 text-sm">Marital Status is required</p>}
          </div>

          {/* Row 5 */}
          <div>
            <label className="block mb-1 font-medium">Religion*</label>
            <input {...register('religion', { required: true })} className="w-full p-2 border rounded" />
            {errors.religion && <p className="text-red-600 text-sm">Religion is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Profession*</label>
            <input {...register('profession', { required: true })} className="w-full p-2 border rounded" />
            {errors.profession && <p className="text-red-600 text-sm">Profession is required</p>}
          </div>

          {/* Row 6 */}
          <div>
            <label className="block mb-1 font-medium">Contact Number*</label>
            <input {...register('mobile', { required: true })} className="w-full p-2 border rounded" />
            {errors.mobile && <p className="text-red-600 text-sm">Contact number is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input type="email" {...register('email', { required: true })} className="w-full p-2 border rounded" />
            {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
          </div>

          {/* Row 7 */}
          <div>
            <label className="block mb-1 font-medium">Mailing Address*</label>
            <input {...register('mailingAddress', { required: true })} className="w-full p-2 border rounded" />
            {errors.mailingAddress && <p className="text-red-600 text-sm">Mailing Address is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Permanent Address*</label>
            <input {...register('permanentAddress', { required: true })} className="w-full p-2 border rounded" />
            {errors.permanentAddress && <p className="text-red-600 text-sm">Permanent Address is required</p>}
          </div>

          {/* Row 8 */}
          <div>
            <label className="block mb-1 font-medium">Photo*</label>
            <input
              type="file"
              accept="image/*"
              {...register('photo', { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.photo && <p className="text-red-600 text-sm">Photo is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Upload CV*</label>
            <input
              type="file"
              accept=".pdf"
              {...register('cv', { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.cv && <p className="text-red-600 text-sm">CV is required</p>}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
