import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import PostContextProvider from "./context/PostContext";

createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </AuthContextProvider>
  </Router>
);
