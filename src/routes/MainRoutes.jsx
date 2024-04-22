import React from "react";

import { Route, Routes } from "react-router-dom";
import Configuration from "../components/detail/Configuration";
import Order from "../components/detail/Order";
import MyServer from "../components/detail/MyServer";
import Auth from "../components/auth/Auth";
import Home from "../components/home/Home";
import Help from "../components/detail/Help";
import Questions from "../components/detail/Questions";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/config" element={<Configuration />} />
      <Route path="/order" element={<Order />} />
      <Route path="/myserver" element={<MyServer />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/help" element={<Help />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
};

export default MainRoutes;
