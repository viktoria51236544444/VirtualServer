import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import Auth from "../components/auth/Auth";
import Configuration from "../components/detail/Configuration";
import Sidebar from "../components/home/Sidebar";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Server />} /> */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/config" element={<Configuration />} />
      <Route path="/sideBar" element={<Sidebar />} />
    </Routes>
  );
};

export default MainRoutes;
