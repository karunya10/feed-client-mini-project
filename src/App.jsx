import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostList from "./pages/Post";
import PostDetailsPage from "./pages/PostDetailsPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import UserProfile from "./pages/UserProfile";
import EditPage from "./pages/EditPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/post" element={<PostList />} />
          <Route path="/posts/:postid" element={<PostDetailsPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit/:postid" element={<EditPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
