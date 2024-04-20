import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";
import Slider from "./components/detail/Slider";

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
