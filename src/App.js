import React from "react";
import MainRoutes from "./routes/MainRoutes";
import MiniDrawer from "./components/home/SidebarAndNavbar";


const App = () => {
  return (
    <div>
      <MiniDrawer/>
      <MainRoutes />
    </div>
  );
};

export default App;
