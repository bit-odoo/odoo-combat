import React, { useState } from 'react';
const REACT_APP_SERVER = import.meta.env.VITE_REACT_APP_SERVER;
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
function RecycleProfile() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [bname, setbname] = useState("");
  const [contactno,setcontactno]=useState("");
  const [address,setaddress]=useState("");
  const[city,setcity]=useState("");
  const [state, setstate] = useState("");
  const [pincode,setpincode]=useState("");
  const [bnkname,setbnkname]=useState("");
  
  const[bno,setbno]=useState("");
  const[ifsc,setifsc]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("name", bname);
    formdata.append("contactno", contactno);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("pincode", pincode);
    formdata.append("bnkname", bnkname);
    formdata.append("bno", bno);
    formdata.append("ifsc", ifsc);

    axios({
      url: `${REACT_APP_SERVER}/api/rdetails/`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => {
        const rid = res["data"]["rid"];        
        if (res["data"]["msg"] === "Recycler details added successfully.") {
          setTimeout(() => {
            alert("Recycler details added successfully!");
            localStorage.setItem("rid", rid);
            
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
    <div className='my-2.5 mx-7 bg-gray-50 p-5 rounded-lg shadow-md'>
      <h3 className='font-semibold text-2xl mb-4'>Recycle Profile</h3>
      <form action="">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex justify-center items-center'>
            <img src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile image" className='w-56 h-56 rounded-xl object-cover' />
          </div>
          <div>
            <div className='mb-4'>
              <label htmlFor="business-name" className='text-sm font-medium text-gray-700'>Business Name</label>
              <input type="text"
                id="business-name"
                value={bname}                
                onChange={(e) => setbname(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Business Name" />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email address</label>
              <input type="email"
                id="email"
                value={email}                
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Enter your email" />
            </div>
            <div className='mb-4'>
              <label htmlFor="mobile-no" className='text-sm font-medium text-gray-700'>Mobile Number</label>
              <input type="text"
                id="account-no"
                value={contactno}
                onChange={(e) => setcontactno(e.target.value)}
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Account Number"
                style={{ appearance: 'textfield', MozAppearance: 'textfield', WebkitAppearance: 'none' }} />

            </div>
          </div>
        </div>

        <div className='ml-10 grid grid-cols-1 '>

          <div className='mb-4'>
            <h5 className='font-semibold text-xl'>Address</h5>
            <label htmlFor="account-name"
              id="address-label"
              
            className='text-sm font-medium text-gray-700 sr-only'>Address</label>
            <input type="text"
              id="account-name"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Address" />
          </div>

          <div className='grid grid-cols-3 gap-3'>
            <div>
              <label htmlFor="account-no" className='text-sm font-medium text-gray-700 sr-only'>City</label>
              <input type="text"
                id="account-no"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm appearance-none' placeholder="City" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>State</label>
              <input type="text"
                id="ifsc-no"
                value={state}
                onChange={(e) => setstate(e.target.value)}
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="State" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>Pincode</label>
              <input type="text"
                id="ifsc-no"
                value={pincode}
                onChange={(e) => setpincode(e.target.value)}
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Pin code" />
            </div>
          </div>

        </div>

        <div className='ml-10 grid grid-cols-1 mt-5'>

          <div className='mb-4'>
            <h5 className='font-semibold text-xl'>Bank Details</h5>
            <label htmlFor="account-name" className='text-sm font-medium text-gray-700 sr-only'>Account Holder Name</label>
            <input type="text"
              id="account-name"
              value={bnkname}
              onChange={(e) => setbnkname(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Account Holder Name" />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label htmlFor="account-no" className='text-sm font-medium text-gray-700 sr-only'>Account No</label>
              <input type="text"
                id="account-no"
                value={bno}
                onChange={(e) => setbno(e.target.value)}
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm appearance-none' placeholder="Account Number" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>IFSC Code</label>
              <input type="text"
                id="ifsc-no"
                value={ifsc}
                onChange={(e) => setifsc(e.target.value)}

                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="IFSC Code" />
            </div>
          </div>

        </div>
      </form >

      <div className='flex justify-center'>
        <button type="submit" onClick={handleSubmit} className='bg-black text-white py-2 px-4 my-5 rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 w-40'>Save </button>
      </div>

    </div >
  );
}

export default RecycleProfile;
