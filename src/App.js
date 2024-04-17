import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Sidebar from "./components/home/Sidebar";
import Configuration from "./components/detail/Configuration";

const App = () => {
  return (
    <div>
      <Sidebar />
      <ServerTable />
    </div>
  );
};

export default App;
