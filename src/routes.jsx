import React from "react";
import { Route, Routes, Navigate } from "react-router";

// pages
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/Login";
import ProfilePage from "./pages/profile/ProfilePage";
import RegisterPage from "./pages/register/Register";
import AdminPage from "./pages/adminPanel/AdminPanel";
import DoctorProfile from "./pages/profile/DoctorProfile";
import AcountPatient from "./pages/acount/AcountPatient";
import NewAppointment from "./pages/appointments/NewAppointment";
import ModifyAppointment from "./pages/appointments/ModifyAppointment";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/doctor" element={<DoctorProfile />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminpanel" element={<AdminPage />} />
        <Route path="/AcountPatient" element={<AcountPatient />} />
        <Route path="/createAppointment" element={<NewAppointment />} />
        <Route path="/ModifyAppointment" element={<ModifyAppointment />} />
      </Routes>
    </div>
  );
}
