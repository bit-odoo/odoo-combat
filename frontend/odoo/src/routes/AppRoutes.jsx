import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/userAccount/Login';
import Layout from '../components/Layout/Layout';
import Signup from '../components/userAccount/Signup';
import Otpvarification from '../components/userAccount/Otpvarification';
import Forgot from '../components/userAccount/Forgot';
import RecycleProcess from '../components/common/RecycleProcess';
import RecycleProfile from '../components/common/RecycleProfile';
import Request from '../components/admin/Request';
import DescriptionPage from '../pages/DescriptionPage';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/signup/verification' element={<Otpvarification/>}/>
            <Route path='/forgot/verification' element={<Otpvarification/>}/>
            <Route path='/recycle-profile' element={<Layout><RecycleProfile/></Layout>}/>
            <Route path='/recycle-process' element={<Layout><RecycleProcess/></Layout>}/>
            <Route path='/request' element={<Layout><Request/></Layout>}/>
            <Route path="/description/:id" element={<Layout><DescriptionPage/></Layout>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes
