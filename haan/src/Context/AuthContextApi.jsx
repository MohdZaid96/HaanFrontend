import React, { createContext, useState } from "react";

const initialAuth = {
  isAuth: false,
  name: "",
  password: "",
  email: "",
  error: "",
  register: false,
};

export const AuthContext = createContext();

export const AuthContextApi = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuth);

  const login = (data) => {
    setAuthState({
      ...authState,
      isAuth: true,
      name: data.name,
      email: data.email,
      password: data.password,
      error: "",
    });
  };

  const logout = () => {
    setAuthState(initialAuth);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
