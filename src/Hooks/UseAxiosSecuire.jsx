import axios from 'axios'
import React from 'react'



 const axiosSecure = axios.create({
    baseURL:'https://next-gen-backend-roan.vercel.app'
    // baseURL:'http://localhost:5000'

})
function UseAxiosSecuire() {
    return axiosSecure
  }
  
  export default UseAxiosSecuire


