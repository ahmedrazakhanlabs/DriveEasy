import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OtpVerification from "./screens/auth/OtpVerification";
import Login from "./screens/auth/Login";
import Home from "./screens/parent/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/otp-verfication" element={<OtpVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent/home" element={<Home />} />
        </Routes>
      </Router>
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
