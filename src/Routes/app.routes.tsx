import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import NotFound from "../Pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
