import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Homepage } from "./homepage";
import { MoviePage } from "./moviepage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};
