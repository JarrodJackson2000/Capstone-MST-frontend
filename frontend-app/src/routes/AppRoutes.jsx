import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { CreateAccountPage } from "../pages/CreateAccountPage";
import { LandingPage } from "../pages/LandingPage";
import { GetStartedHome } from "../pages/GetStartedHome";
import { GetStarted1 } from "../pages/GetStarted1";
import { GetStarted2 } from "../pages/GetStarted2";
import { GetStarted3 } from "../pages/GetStarted3";
import { GetStarted4 } from "../pages/GetStarted4";
import { GetStarted5 } from "../pages/GetStarted5";
import { GetStarted6 } from "../pages/GetStarted6";
import { GetStarted7 } from "../pages/GetStarted7";
import { GetStartedCompleted } from "../pages/GetStartedCompleted";
import { DashboardPage } from "../pages/DashboardPage";
import { ProfilePage } from "../pages/ProfilePage";
import { useContext } from "react";
import { SubContext } from "../context/UserContext";

export default function AppRoutes() {
  const { userHasSubscriptions } = useContext(SubContext);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="get-started"
        element={
          userHasSubscriptions ? (
            <Navigate to="/dashboard" />
          ) : (
            <GetStartedHome />
          )
        }
      />
      <Route path="get-started1" element={<GetStarted1 />} />
      <Route path="get-started1/get-started2" element={<GetStarted2 />} />
      <Route
        path="get-started1/get-started2/get-started3"
        element={<GetStarted3 />}
      />
      <Route
        path="get-started1/get-started2/get-started3/get-started4"
        element={<GetStarted4 />}
      />
      <Route
        path="get-started1/get-started2/get-started3/get-started4/get-started5"
        element={<GetStarted5 />}
      />
      <Route
        path="get-started1/get-started2/get-started3/get-started4/get-started5/get-started6"
        element={<GetStarted6 />}
      />
      <Route
        path="get-started1/get-started2/get-started3/get-started4/get-started5/get-started6/get-started7"
        element={<GetStarted7 />}
      />
      <Route
        path="get-started1/get-started2/get-started3/get-started4/get-started5/get-started6/get-started7/get-started-dashboard"
        element={<GetStartedCompleted />}
      />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}
