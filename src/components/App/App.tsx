import React from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Home } from "views/Home";
import { Portfolio } from "views/Portfolio";
import { Skills } from "views/Skills";
import { ThemeProvider } from "Contexts/theme";

export const App: React.FC = () => (
  <ThemeProvider>
    <Header />
    <Home />
    <Skills />
    <Portfolio />
    <Footer />
  </ThemeProvider>
);
