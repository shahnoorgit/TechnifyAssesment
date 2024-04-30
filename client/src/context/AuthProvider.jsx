import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("Track")) || null
  );
  const isAuth = localStorage.getItem("Track") ? true : false;
  return (
    <AuthContext.Provider value={{ Auth, setAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
