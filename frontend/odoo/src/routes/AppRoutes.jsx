import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../components/userAccount/Login';
import Layout from '../components/Layout/Layout';
import Signup from '../components/userAccount/Signup';
import Otpvarification from '../components/userAccount/Otpvarification';
import Forgot from '../components/userAccount/Forgot';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/signup/verification' element={<Otpvarification/>}/>
            <Route path='/forgot/verification' element={<Otpvarification/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes
