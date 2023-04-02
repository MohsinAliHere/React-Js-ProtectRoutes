import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const ProtectedRoutes = ({ element: Element, ...rest }) => {
    const isAuthenticated = false
    return (
        <Routes>
            <Route  {...rest} element={
                isAuthenticated ? <Element /> : <Navigate to="/" replace />
            } />
        </Routes>
    )
}

export default ProtectedRoutes