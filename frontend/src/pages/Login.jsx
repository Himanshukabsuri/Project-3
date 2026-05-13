import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
       const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    ); 
    alert("login success")
    } catch (error) {
      console.log(error.response.data);
      
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">
               Already have an account?{" "}
  
        <a
            href="/"
        className="text-blue-600 font-semibold hover:underline"
  >
    Signup here
  </a>
</p>

      </form>

    </div>
  )
}

export default Login
