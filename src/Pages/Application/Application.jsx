import React from 'react';
import { useForm } from 'react-hook-form';

function Application() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ✅ Corrected here

  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded shadow mt-9'>
      <h2 className="text-2xl font-semibold mb-4">Recruiting Data Collect Form</h2>
    
    </div>
  );
}

export default Application;
