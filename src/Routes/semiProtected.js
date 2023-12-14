import { Navigate } from "react-router-dom";

export const SemiProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return user ? <Navigate to="/" /> : children;
};
