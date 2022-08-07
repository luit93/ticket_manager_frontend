import React, { useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../../layout/Layout";
import { loginSuccess } from "../login/loginSlice";
import { getNewAccessJWT } from "../../api/userApi";

// const isAuthenticated = true;
const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  useEffect(() => {
    const uodateAccessJWT = async () => {
      const result = await getNewAccessJWT();
      result && dispatch(loginSuccess());
    };
    uodateAccessJWT();
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [isAuth, dispatch]);
  return isAuth ? <Layout>{children}</Layout> : <Navigate to="/" replace />;
};

export default PrivateRoute;
