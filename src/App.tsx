import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import { HomePage } from "./pages/HomePage";
import ProfilePage from "./pages/Profile";
import PageContainer from "./containers/Page";
import { AppProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protected" element={<PageContainer />} >
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add-animal" element={<AddAnimalPage />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </Router>
      </AppProvider>
  );
};

export default App;
