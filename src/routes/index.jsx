import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LoaderImage from "../assets/logo/sodaclick-logo.png";

const Widgets = lazy(() => import("../widgets"));
const Home = lazy(() => import("../pages/Home"));
const Admin = lazy(() => import("../pages/Admin"));
const Users = lazy(() => import("../pages/Users"));
const UserReport = lazy(() => import("../pages/UserReport"));
const Login = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../pages/Login")), 2000); // 2-second delay
    })
);

const Loading = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img src={LoaderImage} alt="Loading..." style={{ width: "200px" }} />{" "}
    <span>....</span>
  </div>
);

const Routers = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-reports" element={<UserReport />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
