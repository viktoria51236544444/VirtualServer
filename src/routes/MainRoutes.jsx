import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Server from "../components/home/Server";
import Auth from "../components/auth/Auth";
import Configuration from "../components/configuration/Configuration";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Server />} /> */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/config" element={<Configuration />} />
    </Routes>
  );
};

export default MainRoutes;
