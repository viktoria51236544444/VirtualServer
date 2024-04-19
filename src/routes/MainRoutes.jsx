import React from "react";

import { Route, Routes } from "react-router-dom";
import Configuration from "../components/detail/Configuration";
import Order from "../components/detail/Order";
import MyServer from "../components/detail/MyServer";
import Auth from "../components/auth/Auth";
import Home from "../page/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/config" element={<Configuration />} />
      <Route path="/order" element={<Order />} />
      <Route path="/myserver" element={<MyServer />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
