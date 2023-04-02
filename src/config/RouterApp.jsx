import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Profile from '../Pages/Profile'
const RouterApp = () => {
    return (
        <Router>
            {/* public Route  */}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            {/* Protected Route */}
            <ProtectedRoutes path="/profile"  element={Profile}  />
        </Router>
    )
}

export default RouterApp