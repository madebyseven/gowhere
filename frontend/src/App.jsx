import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/global/MainHeader";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <MainHeader />
      <Home />
    </Router>
  );
}

export default App;
