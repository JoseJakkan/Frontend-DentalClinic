import React from "react";
import { Route, Routes, Navigate } from "react-router";

// pages
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/Login";
import ProfilePage from "./pages/profile/ProfilePage";
import RegisterPage from "./pages/register/Register";
import AdminPage from "./pages/adminPanel/AdminPanel";
import DoctorPage from "./pages/doctor/Doctor";
import AcountPage from "./pages/acount/AcountPatient";
import NewAppointment from "./pages/profile/NewAppointment";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminpanel" element={<AdminPage />} />
        <Route path="/acount" element={<AcountPage />} />
        <Route path="/createAppointment" element={<NewAppointment />} />
      </Routes>
    </div>
  );
}
