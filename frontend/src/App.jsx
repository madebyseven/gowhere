import React from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "./components/global/MainHeader";
import MainFooter from "./components/global/MainFooter";

import "./App.css";
import "./assets/css/custom.css";

const App = () => {
  return (
    <>
      <MainHeader />
      <div id="detail">
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
};

export default App;
