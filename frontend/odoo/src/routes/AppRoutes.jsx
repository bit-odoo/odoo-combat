import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../components/userAccount/Login';
import Layout from '../components/Layout/Layout';
import Signup from '../components/userAccount/Signup';
import Otpvarification from '../components/userAccount/Otpvarification';
import Forgot from '../components/userAccount/Forgot';
import Dashboard from '../components/admin/Dashboard';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/home' element={<Layout><Homepage/></Layout>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/signup/verification' element={<Otpvarification/>}/>
            <Route path='/forgot/verification' element={<Otpvarification/>}/>
            <Route path='/admin' element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes
