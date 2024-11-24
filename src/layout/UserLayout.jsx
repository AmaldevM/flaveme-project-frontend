import React, { useState } from 'react';
import Header from "../components/user/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";
import { UserHeader } from "@/components/user/UserHeader";


export function UserLayout() {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    <div>
      {isUserAuth ? <UserHeader /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};
