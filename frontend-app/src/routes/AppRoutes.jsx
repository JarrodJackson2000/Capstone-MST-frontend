import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { CreateAccountPage } from "../pages/CreateAccountPage";
import { LandingPage } from "../pages/LandingPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
