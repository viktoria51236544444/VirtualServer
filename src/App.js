import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";
import Auth from "./components/auth/Auth";
import Slider from "./components/detail/Slider";

const App = () => {
  return (
    <div>
      <Auth />
      <Slider />
      <MainRoutes />
    </div>
  );
};

export default App;
