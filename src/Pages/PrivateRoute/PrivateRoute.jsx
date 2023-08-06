import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import DnaLoader from "../Shared/DnaLoader/DnaLoader";
import { AuthContex } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  
  const location = useLocation();

  if (loading) {
    return (
      <DnaLoader></DnaLoader>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
