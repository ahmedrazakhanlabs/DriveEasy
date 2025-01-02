import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./utils/Data";
import PrivateRoute from "./screens/auth/protected/PrivateProtectedRoute";
import AuthRoute from "./screens/auth/protected/AuthProtect";

const App = () => {
  return (
    <div className="transition-all duration-500">
      <Router>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<AuthRoute>{element}</AuthRoute>}
            />
          ))}
          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PrivateRoute>{element}</PrivateRoute>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
