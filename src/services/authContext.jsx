// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const base_url = "http://62.72.13.124/";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fungsi untuk login
  const login = async (userData) => {
    try {
      const response = await axios.post(`${base_url}/api/login`, userData);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("User Login Successfully: ", response.data);
    } catch (error) {
      console.log("Login Failed: ", error);
    }
  };

  // Fungsi untuk logout
  const logout = async () => {
    try {
      await axios.post(`${base_url}/api/logout`);
      setUser(null);
      localStorage.removeItem("user");
      console.log("User Logout Successfully");
    } catch (error) {
      console.log("Logout Failed: ", error);
    }
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
