import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./utils/Data";
import PrivateRoute from "./screens/auth/protected/PrivateProtectedRoute";
import AuthRoute from "./screens/auth/protected/AuthProtect";
import LostPage from "./screens/auth/LostPage";
import { Provider } from "react-redux";
import store from "./redux/store";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Car size={80} />
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-4 font-sans"
      >
        DriveThru.com
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[14px] mb-8 font-light font-Monsterrat"
      >
        Learn to Drive, The Smart Way.
      </motion.p>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Remove the splash screen after 4 minutes (240,000 milliseconds)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.removeItem("selectedInstructor");
  }, []);

  return (
    <div className="transition-all duration-500">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default App;
