import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" container-fluid error_page">
        <h1>404 Page Not Found</h1>
        {/* <button className=' btn-get-started' onClick={() => {navigate("/")}}>Go to Home</button> */}
        <div className=" mt-3">
          <NavLink to={navigate("/")} className="redirect_home">
            Go To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
