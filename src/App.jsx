import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./utils/Data";
import PrivateRoute from "./screens/auth/protected/PrivateProtectedRoute";
import AuthRoute from "./screens/auth/protected/AuthProtect";
import LostPage from "./screens/auth/LostPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  return (
    <div className="transition-all duration-500">
      <Provider store={store}>
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

            <Route path={"*"} element={<LostPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
