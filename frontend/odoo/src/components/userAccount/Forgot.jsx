import React from 'react'
import { Link } from 'react-router-dom';

function Forgot() {
  return (
    <div className='bg-gray-300 min-h-screen flex justify-center items-center'>
      <div className='bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-5 max-w-4xl m-5 w-full'>
        <div className='md:w-1/2 w-full md:p-10 p-5 flex flex-col justify-center'>
          <h1 className='font-semibold text-3xl mb-2'>Forgot Password</h1>
          <p className='mb-10 text-gray-600'>Welcome back! Please enter your details</p>
          <form>
            <label htmlFor="email" className='hidden text-sm font-medium text-gray-700'>Email</label>
            <input type="email" id="email" className='mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#49616b] sm:text-sm mb-4' placeholder="Email address" />

            <Link to='/forgot/verification'>
            <button type="submit" className='w-full bg-black text-white py-2 px-4 my-5 shadow-sm hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>Sign In</button>
            </Link>
          </form>

          <p className='my-3'>By signing in or creating an account, you agree with our <span className='font-bold underline'>Terms & Conditions</span> and <span className='font-bold underline'>Privacy Statement</span></p>
        </div>
        <div className='md:w-1/2 w-full justify-center items-center md:h-auto h-64 hidden md:block'>
          <img src="https://images.pexels.com/photos/13608798/pexels-photo-13608798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="login photo" className='w-full object-cover rounded-2xl md:h-full h-64' />
        </div>
      </div>
    </div>
  )
}

export default Forgot
