import React from "react";
import { Route, Routes, Navigate } from "react-router";

// pages
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/Login";
import ProfilePage from "./pages/profile/ProfilePage";
import RegisterPage from "./pages/register/Register";
import AdminPage from "./pages/adminPanel/AdminPanel";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminpanel" element={<AdminPage />} />
      </Routes>
    </div>
  );
}
