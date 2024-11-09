import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
