import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-gray-300 min-h-screen flex justify-center items-center'>
    <div className='bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-5 max-w-4xl m-5 w-full'>
      <div className='md:w-1/2 w-full flex justify-center items-center md:h-auto h-64'>
        <img src="https://cdn.dribbble.com/userupload/14898990/file/original-ba68e98ea10e1867e831884c3b153387.png?resize=1504x1128&vertical=center" alt="login photo" className='w-full object-cover rounded-2xl md:h-full h-64' />
      </div>
      <div className='md:w-1/2 w-full md:p-10 p-5 flex flex-col justify-center'>
        <h1 className='font-semibold text-3xl mb-2'>Holla,<br />Welcome Back</h1>
        <p className='mb-10 text-gray-600'>Hey, welcome back to your special place</p>
        <form action="">
          <label htmlFor="email" className='text-sm font-medium text-gray-700 sr-only'>Email address</label>
          <input type="email" id="email" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#a653ea] sm:text-sm mb-4' placeholder="Enter your email" />

          <label htmlFor="password" className='text-sm font-medium text-gray-700 sr-only'>Password</label>
          <input type="password" id="password" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#a653ea] sm:text-sm mb-4' placeholder="Enter your password" />

          <div className='flex items-center justify-between mb-6'>
            <label className='flex items-center'>
              <input type="checkbox" className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out' />
              <span className='ml-2 text-sm text-gray-600'>Remember me</span>
            </label>
            <Link to='/forgot' className='text-sm text-[#a653ea] hover:underline'>Forgot Password?</Link>
          </div>

          <button type="submit" className='w-1/2 bg-[#a653ea] text-white py-2 px-4 my-5 rounded-md shadow-sm hover:bg-[#58327d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Sign In</button>
        </form>

        <p className='my-6 text-sm text-start text-gray-600'>
          Don't have an account? <Link to="/signup" className='text-[#a653ea] hover:underline'>Sign Up</Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login
