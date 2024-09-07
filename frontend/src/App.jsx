import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/global/MainHeader";

import "./App.css";

function App() {
  return (
    <Router>
      <MainHeader />
    </Router>
  );
}

export default App;
