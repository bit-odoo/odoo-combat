import React , { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
const REACT_APP_SERVER = import.meta.env.VITE_REACT_APP_SERVER;
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";


function Signup() {
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
      url: `${REACT_APP_SERVER}/api/signin/`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => {
        if (res["data"]["msg"] === "User created successfully.") {
            alert("Sign Up successful!");
            navigateTo("/");
          
        } else {
          alert("Login failed!");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='bg-gray-300 min-h-screen flex justify-center items-center'>
      <div className='bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-5 max-w-4xl m-5 w-full'>
        <div className='md:w-1/2 w-full md:p-10 p-5 flex flex-col justify-center'>
          <h1 className='font-semibold text-3xl mb-2'>Sign in or create an account</h1>
          <p className='mb-10 text-gray-600'>Welcome back! Please enter your details</p>
          <form>
            <label htmlFor="email" className='hidden text-sm font-medium text-gray-700'>Email</label>
            <input type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}             
            className='mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#49616b] sm:text-sm mb-4' placeholder="Email address" />

            <label htmlFor="password" className='hidden text-sm font-medium text-gray-700'>Password</label>
            <input type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#49616b] sm:text-sm mb-4' placeholder="Password" />

            
            <button type="submit" onClick={handleSubmit} className='w-full bg-black text-white py-2 px-4 my-5 shadow-sm hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>Sign In</button>
            
          </form>

          <p className='my-3'>By signing in or creating an account, you agree with our <span className='font-bold underline'>Terms & Conditions</span> and <span className='font-bold underline'>Privacy Statement</span></p>
        </div>
        <div className='md:w-1/2 w-full justify-center items-center md:h-auto h-64 hidden md:block'>
          <img src="https://media.istockphoto.com/id/1199233160/photo/green-recycle-bin-on-white-background.jpg?s=612x612&w=0&k=20&c=BXxqy1ZOyPQokbJoW1WVrss2SJ9rsP3Ju-2IN__va8U=" alt="login photo" className='w-full object-cover rounded-2xl md:h-full h-64' />
        </div>
      </div>
    </div>
  );
}

export default Signup;
