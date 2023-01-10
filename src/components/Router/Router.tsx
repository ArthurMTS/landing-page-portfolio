import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPageRoutes } from "views/constants/routes";
import { Home } from "views/pages/Home";

export const Router: React.FC = () =>
  <BrowserRouter>
    <Routes>
      <Route path={LandingPageRoutes.home} element={<Home />} />
    </Routes>
  </BrowserRouter>
