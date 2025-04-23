import { useQuery } from '@tanstack/react-query';
import React from 'react'
import UseAxiosSecuire from '../../Hooks/UseAxiosSecuire';

function ApplicationData() {
    const axiosSecure = UseAxiosSecuire()
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
    


  return (
    <div>
      hello
    </div>
  )
}

export default ApplicationData
