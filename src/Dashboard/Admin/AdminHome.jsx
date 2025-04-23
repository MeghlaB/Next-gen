import { BookImage, User, User2Icon } from "lucide-react";
import React from "react";
import UseAxiosSecuire from "../../Hooks/UseAxiosSecuire";

import { useQuery } from "@tanstack/react-query";


function AdminHome() {

  const axiosSecure = UseAxiosSecuire();


  const {
    data: users = [],
    isLoading,
    isError,
    error,
   
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data)
      return res.data;
    },
  });

  const {
    data: applications = [],
    
   
  } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      console.log(res.data)
      return res.data;
    },
  });



  if (isLoading) {
    return <p className="text-center text-gray-500 mt-10">Loading blogs...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error fetching blogs: {error.message}
      </p>
    );
  }


  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold text-teal-600">Hi , WelCome Back</h1>
      <div className="flex gap-6 items-center justify-center">
        {/* grid-1 */}
        <div className="card w-[260px]  bg-gradient-to-r  from-purple-500 to-purple-400 shadow-sm my-7">
          <div className="flex px-8 py-10 items-center justify-center gap-4">
            <div>
            <User2Icon/>
            </div>
            <div className="text-xl font-bold text-white">Total Users <span className="text-black">({users.length}) </span></div>
          </div>
        </div>

      
        {/* grid-3 */}
        <div className="card w-[260px]   bg-gradient-to-r  from-amber-500 to-amber-400 shadow-sm my-7">
          <div className="flex px-8 py-10 items-center justify-center gap-4">
            <div>
              <BookImage/>
             
            </div>
            <div className="text-xl font-bold text-white"> Application
            <span className="text-black">({applications.length}) </span>
            </div>
          </div>
        </div>
        {/* grid-4 */}
      
      </div>
      {/* charts */}
      {/* <div>
        <ApexChart/>
      </div> */}
    </div>
  );
}

export default AdminHome;
