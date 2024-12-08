import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OtpVerification from "./screens/auth/OtpVerification";
import Login from "./screens/auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verfication" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
