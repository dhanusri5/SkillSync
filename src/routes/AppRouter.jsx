import Login from "../features/auth/view/loginPage";
import Register from "../features/auth/view/RegisterPage";
import Dashboard from "../features/dashboard/view/dashBoardScreen";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      );
}