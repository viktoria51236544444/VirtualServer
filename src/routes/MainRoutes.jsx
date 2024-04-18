import React from "react";
import Auth from "../components/auth/Auth";
import { Route, Routes } from "react-router-dom";

import Configuration from "../components/detail/Configuration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/config" element={<Configuration />} />
    </Routes>
  );
};

export default MainRoutes;
