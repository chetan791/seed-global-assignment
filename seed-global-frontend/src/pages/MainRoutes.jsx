import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LandingPage } from "./LandingPage";
import { Universities } from "./Universities";
import { StudentLoginSignup } from "./StudentLoginSignup";
import { ViewUniversityPage } from "./ViewUniversityPage";
import { EnrolledPage } from "./EnrolledPage";
import { UniversityLoginSignup } from "./UniversityLoginSignup";
import { Enquiries } from "./Enquiries";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/student-Login-Signup" element={<StudentLoginSignup />} />
      <Route path="/view" element={<ViewUniversityPage />} />
      <Route path="/enrolled" element={<EnrolledPage />} />
      <Route
        path="/university-Login-Signup"
        element={<UniversityLoginSignup />}
      />
      <Route path="/enquiries" element={<Enquiries />} />
    </Routes>
  );
};
