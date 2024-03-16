import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default AppRouter;
