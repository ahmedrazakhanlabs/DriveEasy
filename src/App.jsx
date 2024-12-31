import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./utils/Data";

const App = () => {
  return (
    <div className="transition-all duration-500">
      <Router>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {privateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
