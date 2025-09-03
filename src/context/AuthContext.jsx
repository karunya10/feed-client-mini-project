import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  const { user, signup, login, verify, setUser } = useAuth();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, verify, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
