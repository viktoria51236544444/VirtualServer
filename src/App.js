import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";

const App = () => {
  return (
    <div>
      <MainRoutes />
      <Sidebar />
    </div>
  );
};

export default App;
