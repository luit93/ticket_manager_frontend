import React from "react";
import { Route, Navigate,Outlet } from "react-router-dom";
import Layout from "../../layout/Layout";
const isLoggedIn = true;
const PrivateRoute = ({children, ...rest}) => {
  return (
   
     
        isLoggedIn ? <Layout>{children}</Layout> : <Navigate to="/entry" replace/>
    
  
  );
};

export default PrivateRoute;
