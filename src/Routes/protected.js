import { Navigate } from "react-router-dom";

export const ProtectedRoute=({children})=>{
    const user = JSON.parse(localStorage.getItem('userData'));
  
    return user?children:<Navigate to='/login' />
}