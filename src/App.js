import React from "react";
import Sidebar from "./components/home/Sidebar";
import ServerTable from "./components/detail/MyServer";

const App = () => {
  return (
    <div>
      <Sidebar />
      <ServerTable />
    </div>
  );
};

export default App;
