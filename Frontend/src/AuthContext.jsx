// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext with an initial value of `null`
const AuthContext = createContext(null);

// AuthProvider component to wrap around the parts of your app that need access to the auth state
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ setAuthenticated, authenticated, login, logout,userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
