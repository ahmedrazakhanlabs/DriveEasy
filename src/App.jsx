import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtpVerification from "./screens/auth/OtpVerification";
import Login from "./screens/auth/Login";
import Home from "./screens/parent/Home";
import Lessons from "./screens/parent/Lessons";
import DrivingAbility from "./screens/parent/driving-ability/DrivingAbility";
import Payement from "./screens/parent/payement/Payement";
import Inbox from "./screens/parent/Inbox";
import InboxById from "./screens/parent/InboxById";
import Resources from "./screens/parent/Resources";
import Contacts from "./screens/parent/contacts/Contacts";
import AddContact from "./screens/parent/contacts/subpage/AddContact";
import Profile from "./screens/parent/Profile";
import RelativeLogs from "./screens/parent/RelativeLogs";

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
          <Route path="/parent/payement" element={<Payement />} />
          <Route path="/parent/inbox" element={<Inbox />} />
          <Route path="/parent/inbox/:id" element={<InboxById />} />
          <Route path="/parent/resources" element={<Resources />} />
          <Route path="/parent/contacts" element={<Contacts />} />
          <Route path="/parent/add-contact" element={<AddContact />} />
          <Route path="/parent/profile" element={<Profile />} />
          <Route path="/parent/relative-logs" element={<RelativeLogs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
