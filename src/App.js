import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";
import Auth from "./components/auth/Auth";
import Configuration from "./components/detail/Configuration";

const App = () => {
  return (
    <div>
      <Sidebar />
      <MainRoutes />
    </div>
  );
};

export default App;
