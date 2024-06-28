import React, { useState, useRef } from 'react';

function Otpvarification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    // Ensure only numeric input or empty string is allowed
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input box if value is entered
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    // Handle backspace
    if (event.keyCode === 8 && index > 0 && otp[index] === '') {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInputFocus = (index) => {
    // Ensure numeric keyboard on mobile devices
    inputRefs.current[index].setAttribute('inputmode', 'numeric');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    // Handle OTP verification logic here
    console.log("Entered OTP:", enteredOtp);
  };
  
  return (
    <div className='bg-gray-300 min-h-screen flex justify-center items-center'>
      <div className='bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-1 md:p-5 max-w-4xl m-16 w-full'>
        <div className='md:w-1/2 w-full md:p-10 p-5 flex flex-col justify-center'>
          <h1 className='font-semibold text-3xl mb-2'>Enter the code</h1>
          <p className='mb-10 text-gray-600'>Enter the OTP Code that we sent to your email <span className='font-bold'>a****y@gmail.com</span> and be careful not to share the code with anyone.</p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  onFocus={() => handleInputFocus(index)}
                  className='w-12 h-12 text-center bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mb-2'
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  required
                />
              ))}
            </div>
            <button type="submit" className='w-full bg-black text-white py-2 px-4 my-5 shadow-sm hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>Continue</button>
          </form>

          <p className='flex justify-center items-center underline'>Send code again</p>

          <p className='my-3'>By signing in or creating an account, you agree with our <span className='font-bold underline'>Terms & Conditions</span> and <span className='font-bold underline'>Privacy Statement</span></p>
        </div>

        <div className='md:w-1/2 w-full justify-center items-center md:h-auto h-64 hidden md:block'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blackborough_House-71.jpg" alt="login photo" className='w-full object-cover rounded-2xl md:h-full h-64' />
        </div>
      </div>
    </div>
  );
}

export default Otpvarification;
