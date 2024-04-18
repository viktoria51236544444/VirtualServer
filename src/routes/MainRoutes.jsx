import React from "react";
import Auth from "../components/auth/Auth";
import MyServer from "../components/detail/MyServer";
import { Route, Routes } from "react-router-dom";
import Order from "../components/detail/Order";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/config" element={<Configuration />} />
    </Routes>
  );
};

export default MainRoutes;
