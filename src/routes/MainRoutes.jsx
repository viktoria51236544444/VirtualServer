import React from "react";
import Auth from "../components/auth/Auth";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
