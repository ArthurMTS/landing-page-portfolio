import React from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Home } from "views/Home";
import { Portfolio } from "views/Portfolio";
import { Skills } from "views/Skills";

export const App: React.FC = () => (
  <React.Fragment>
    <Header />
    <Home />
    <Skills />
    <Portfolio />
    <Footer />
  </React.Fragment>
);
