import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import ReactGA from 'react-ga4';  // Import Google Analytics

// Separate RequireAuth Component
const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
};

// Tracking Page Views
const usePageTracking = () => {
  const location = useLocation();  // useLocation must be inside <BrowserRouter>

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      {/* Ensure the BrowserRouter wraps usePageTracking */}
      <usePageTracking />  
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/users" element={<RequireAuth><List /></RequireAuth>} />
          <Route path="/users/:userId" element={<RequireAuth><Single /></RequireAuth>} />
          <Route path="/users/new" element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>} />
          <Route path="/products" element={<RequireAuth><List /></RequireAuth>} />
          <Route path="/products/:productId" element={<RequireAuth><Single /></RequireAuth>} />
          <Route path="/products/new" element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
