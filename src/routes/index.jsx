import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@components/Layout";
import Loader from "@components/sharedcomponents/loader";
import ProtectedRoutes from "./ProtectedRoutes";

const Widgets = lazy(() => import("../widgets"));
const Home = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../pages/Home")), 3000);
    })
);
const Admin = lazy(() => import("../pages/Admin"));
const Users = lazy(() => import("../pages/Users"));
const UserReport = lazy(() => import("../pages/UserReport"));
const Login = lazy(() => import("../pages/Login"));

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/widgets" element={<Widgets />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users-reports" element={<UserReport />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
