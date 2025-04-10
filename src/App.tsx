import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import ProfilePage from "./pages/Profile";
import PageContainer from "./containers/Page";
import { AppProvider } from "./context/AppContext";
import AnimalsPage from "./pages/AnimalsPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityPost from "./pages/CommunityPost";
import AiBot from "./pages/AiBot";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";
import RedirectRoute from "./routes/RedirectRoute";
import "toastifier/dist/toastifier.min.css";

const App: React.FC = () => {

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={<RedirectRoute element={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RedirectRoute element={<RegisterPage />} />}
          />
          {/* Protected routes */}
          <Route path="/protected" element={<PageContainer />}>
            <Route
              path="profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route
              path="add-animal"
              element={<ProtectedRoute element={<AddAnimalPage />} />}
            />
            <Route
              path="animals"
              element={<ProtectedRoute element={<AnimalsPage />} />}
            />
            <Route
              path="landing"
              element={<ProtectedRoute element={<LandingPage />} />}
            />
            <Route
              path="community"
              element={<ProtectedRoute element={<CommunityPage />} />}
            />
            <Route
              path="community/:id"
              element={<ProtectedRoute element={<CommunityPost />} />}
            />
            <Route path="ai" element={<AiBot />} />
            <Route
              path="animal-details/:id"
              element={<ProtectedRoute element={<AnimalDetailsPage />} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
