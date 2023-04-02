import React, {FC, ReactElement, ReactNode} from 'react';
import {useAppSelector} from "../hooks/reduxHooks";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const RequireAuth = () => {
  const token = useAppSelector(state => state.auth.token);
  const location = useLocation();

  return token ? <Outlet/> : <Navigate to="/signin" replace state={{ pathname: location.pathname }}/>
};

export default RequireAuth;