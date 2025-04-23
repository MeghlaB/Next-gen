import axios from 'axios'


const axiosPublic= axios.create({
    baseURL:'https://next-gen-backend-roan.vercel.app'
})

function UseAxiosPublic() {
  return axiosPublic
}

export default UseAxiosPublic
