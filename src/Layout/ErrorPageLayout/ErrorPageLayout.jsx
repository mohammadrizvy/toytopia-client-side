import React from "react";
import { Outlet } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const ErrorPageLayout = () => {
  return (
    <div>
        <ErrorPage></ErrorPage>
    </div>
  );
};

export default ErrorPageLayout;
