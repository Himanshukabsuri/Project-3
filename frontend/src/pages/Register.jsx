import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        role:"student"
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup",formData)

            console.log(res.data)
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
          Signup
        </h2>

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

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

        {/* Role */}
        <select
          name="role"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="student">
            Student
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Signup
        </button>

        <p className="text-center text-gray-600 mt-4">
  Already have an account?{" "}
  
  <a
    href="/login"
    className="text-blue-600 font-semibold hover:underline"
  >
    Login here
  </a>
</p>

      </form>

    </div>
  )
}

export default Register
