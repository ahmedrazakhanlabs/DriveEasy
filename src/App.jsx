import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtpVerification from "./screens/auth/OtpVerification";
import Login from "./screens/auth/Login";
import Home from "./screens/parent/Home";
import Lessons from "./screens/parent/Lessons";
import DrivingAbility from "./screens/parent/driving-ability/DrivingAbility";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<OtpVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent/home" element={<Home />} />
          <Route path="/parent/lessons" element={<Lessons />} />
          <Route path="/parent/driving-ability" element={<DrivingAbility />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
