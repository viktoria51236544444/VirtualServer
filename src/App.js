import React from "react";
import MainRoutes from "./routes/MainRoutes";

import Auth from "./components/auth/Auth";
import Slider from "./components/detail/Slider";
import Sidebar from "./components/home/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Slider />
      <MainRoutes />
    </div>
  );
};

export default App;
