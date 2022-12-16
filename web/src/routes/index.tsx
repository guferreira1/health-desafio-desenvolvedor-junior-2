import { Route, Routes } from "react-router-dom";
import { PetsPage } from "../pages/pets/petsPage";
import { HomePage } from "../pages/home/homePage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pets" element={<PetsPage />} />
  </Routes>
);
