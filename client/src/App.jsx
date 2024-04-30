import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/sign-up"
          element={isAuth ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
