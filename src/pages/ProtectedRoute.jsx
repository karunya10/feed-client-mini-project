import  { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoute() {
    const {user} = useContext(AuthContext);
  return  user ? <Outlet /> : <Navigate to="/login" />
}


export default ProtectedRoute