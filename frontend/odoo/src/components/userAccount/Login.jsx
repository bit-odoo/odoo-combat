import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const REACT_APP_SERVER = import.meta.env.VITE_REACT_APP_SERVER;
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
//check a commit work 
function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("isAdmin", false);

    axios({
      url: `${REACT_APP_SERVER}/api/login/`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => {
        const email = res["data"]["data"];        
        const isadmin = res["data"]["isAdmin"];
        if (res["data"]["msg"] === "Login successfully.") {
          setTimeout(() => {
            localStorage.setItem("email", email);
            localStorage.setItem("isadmin", isadmin);
            navigateTo("/recycle-profile/");
          }, 1000);
        } else {
          alert("Login failed!");
          //window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
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
          <input type="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#a653ea] sm:text-sm mb-4' placeholder="Enter your email" />

          <label htmlFor="password" className='text-sm font-medium text-gray-700 sr-only'>Password</label>
          <input type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#a653ea] sm:text-sm mb-4' placeholder="Enter your password" />

          <div className='flex items-center justify-between mb-6'>
            
            <Link to='/forgot' className='text-sm text-[#a653ea] hover:underline'>Forgot Password?</Link>
          </div>

          <button type="submit" onClick={handleSubmit} className='w-1/2 bg-[#a653ea] text-white py-2 px-4 my-5 rounded-md shadow-sm hover:bg-[#58327d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Log In</button>
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
