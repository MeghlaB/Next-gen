import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ApplicationFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    alert('Form Submitted!');
    setIsOpen(false);
  };

  return (
    <>
      {/* Open Modal Button */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Application Form
      </button> */}

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Application Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
              {/* Row 1 */}
              <div>
                <label>Name*</label>
                <input {...register('name', { required: true })} className="w-full p-2 border rounded" />
                {errors.name && <p className="text-red-600 text-sm">Name is required</p>}
              </div>
              <div>
                <label>Date of Birth*</label>
                <input type="date" {...register('dob', { required: true })} className="w-full p-2 border rounded" />
                {errors.dob && <p className="text-red-600 text-sm">Date of Birth is required</p>}
              </div>

              {/* Row 2 */}
              <div>
                <label>Father’s Name*</label>
                <input {...register('fatherName', { required: true })} className="w-full p-2 border rounded" />
                {errors.fatherName && <p className="text-red-600 text-sm">Father’s Name is required</p>}
              </div>
              <div>
                <label>Mother’s Name*</label>
                <input {...register('motherName', { required: true })} className="w-full p-2 border rounded" />
                {errors.motherName && <p className="text-red-600 text-sm">Mother’s Name is required</p>}
              </div>

              {/* Row 3 */}
              <div>
                <label>Nationality*</label>
                <input {...register('nationality', { required: true })} className="w-full p-2 border rounded" />
                {errors.nationality && <p className="text-red-600 text-sm">Nationality is required</p>}
              </div>
              <div>
                <label>Gender*</label>
                <select {...register('gender', { required: true })} className="w-full p-2 border rounded">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <p className="text-red-600 text-sm">Gender is required</p>}
              </div>

              {/* Row 4 */}
              <div>
                <label>NID/Birth/Passport No.*</label>
                <input {...register('idNumber', { required: true })} className="w-full p-2 border rounded" />
                {errors.idNumber && <p className="text-red-600 text-sm">NID/Birth/Passport number is required</p>}
              </div>
              <div>
                <label>Marital Status*</label>
                <select {...register('maritalStatus', { required: true })} className="w-full p-2 border rounded">
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
                {errors.maritalStatus && <p className="text-red-600 text-sm">Marital Status is required</p>}
              </div>

              {/* Row 5 */}
              <div>
                <label>Religion*</label>
                <input {...register('religion', { required: true })} className="w-full p-2 border rounded" />
                {errors.religion && <p className="text-red-600 text-sm">Religion is required</p>}
              </div>
              <div>
                <label>Profession*</label>
                <input {...register('profession', { required: true })} className="w-full p-2 border rounded" />
                {errors.profession && <p className="text-red-600 text-sm">Current Profession is required</p>}
              </div>

              {/* Row 6 */}
              <div>
                <label>Contact Number*</label>
                <input {...register('mobile', { required: true })} className="w-full p-2 border rounded" />
                {errors.mobile && <p className="text-red-600 text-sm">Contact Number is required</p>}
              </div>
              <div>
                <label>Email*</label>
                <input type="email" {...register('email', { required: true })} className="w-full p-2 border rounded" />
                {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
              </div>

              {/* Row 7 */}
              <div>
                <label>Mailing Address*</label>
                <input {...register('mailingAddress', { required: true })} className="w-full p-2 border rounded" />
                {errors.mailingAddress && <p className="text-red-600 text-sm">Mailing Address is required</p>}
              </div>
              <div>
                <label>Permanent Address*</label>
                <input {...register('permanentAddress', { required: true })} className="w-full p-2 border rounded" />
                {errors.permanentAddress && <p className="text-red-600 text-sm">Permanent Address is required</p>}
              </div>

              {/* Row 8 */}
              <div>
                <label>Photo*</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('photo', { required: true })}
                  className="w-full p-2 border rounded"
                />
                {errors.photo && <p className="text-red-600 text-sm">NRIC Photo is required</p>}
              </div>
              <div>
                <label>Upload CV*</label>
                <input
                  type="file"
                  accept=".pdf"
                  {...register('cv', { required: true })}
                  className="w-full p-2 border rounded"
                />
                {errors.cv && <p className="text-red-600 text-sm">Upload CV is required</p>}
              </div>

              {/* Submit Button */}
              <div className="col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
