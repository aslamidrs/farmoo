import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import { HomePage } from "./pages/HomePage";
import PageContainer from "./containers/Page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes with layout */}
        <Route path="/protected" element={<PageContainer />}>
          <Route path="landing" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="add-animal" element={<AddAnimalPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
