import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MoviePage  from "./Movie/moviepage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};
