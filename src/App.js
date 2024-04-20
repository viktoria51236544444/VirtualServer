import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";
import Auth from "./components/auth/Auth";

const App = () => {
  return (
    <div>
      <Auth />
      <MainRoutes />
    </div>
  );
};

export default App;
