import axios from 'axios'


const axiosPublic= axios.create({
    baseURL:'https://next-gen-backend-roan.vercel.app'
    //  baseURL:'http://localhost:5000'
})

function UseAxiosPublic() {
  return axiosPublic
}

export default UseAxiosPublic
