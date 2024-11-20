import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ErrorPage = () => {

    const naviagte = useNavigate()


  return <div>
    <h1>404 Not Found!</h1>
    <h2 onClick={()=>naviagte('/')} >Navigate to home</h2>
  </div>;
};
