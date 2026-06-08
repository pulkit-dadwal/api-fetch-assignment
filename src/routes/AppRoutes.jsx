import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ShowDetails from "../pages/ShowDetails";
import UserStories from "../pages/UserStories";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show/:id" element={<ShowDetails />} />
      <Route path="/user-stories" element={<UserStories />} />
    </Routes>
  );
}

export default AppRoutes;