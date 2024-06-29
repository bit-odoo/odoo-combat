import React from 'react';

function RecycleProfile() {
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
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Business Name" />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email address</label>
              <input type="email"
                id="email"
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Enter your email" />
            </div>
            <div className='mb-4'>
              <label htmlFor="mobile-no" className='text-sm font-medium text-gray-700'>Mobile Number</label>
              <input type="number"
                id="account-no"
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Account Number"
                style={{ appearance: 'textfield', MozAppearance: 'textfield', WebkitAppearance: 'none' }} />

            </div>
          </div>
        </div>

        <div className='ml-10 grid grid-cols-1 '>

          <div className='mb-4'>
            <h5 className='font-semibold text-xl'>Address</h5>
            <label htmlFor="account-name" className='text-sm font-medium text-gray-700 sr-only'>Address</label>
            <input type="text"
              id="account-name"
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Address" />
          </div>

          <div className='grid grid-cols-3 gap-3'>
            <div>
              <label htmlFor="account-no" className='text-sm font-medium text-gray-700 sr-only'>Account No</label>
              <input type="number"
                id="account-no"
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm appearance-none' placeholder="City" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>IFSC Code</label>
              <input type="text"
                id="ifsc-no"
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="State" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>IFSC Code</label>
              <input type="text"
                id="ifsc-no"
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
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="Account Holder Name" />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label htmlFor="account-no" className='text-sm font-medium text-gray-700 sr-only'>Account No</label>
              <input type="number"
                id="account-no"
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm appearance-none' placeholder="Account Number" />
            </div>
            <div>
              <label htmlFor="ifsc-no" className='text-sm font-medium text-gray-700 sr-only'>IFSC Code</label>
              <input type="text"
                id="ifsc-no"
                className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm' placeholder="IFSC Code" />
            </div>
          </div>

        </div>
      </form >

      <div className='flex justify-center'>
        <button type="submit" className='bg-black text-white py-2 px-4 my-5 rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 w-40'>Save </button>
      </div>

    </div >
  );
}

export default RecycleProfile;
