import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import ProfilePage from "./pages/Profile";
import PageContainer from "./containers/Page";
import { AppProvider } from "./context/AppContext";
import AnimalsPage from "./pages/AnimalsPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityPost from "./pages/CommunityPost";

const App: React.FC = () => {
  return (
    <AppProvider>
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protected" element={<PageContainer />} >
          <Route path="profile" element={<ProfilePage />} />
            <Route path="add-animal" element={<AddAnimalPage />} />
            <Route path='animals' element={<AnimalsPage />} />
          <Route path="add-animal" element={<AddAnimalPage />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="community/:id" element={<CommunityPost />} />
        </Route>
      </Routes>
      </Router>
      </AppProvider>
  );
};

export default App;
