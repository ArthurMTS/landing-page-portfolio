import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import { ViewPage } from "./Home.styles";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ViewPage>

      </ViewPage>
      <ViewPage className="secondary">
        
      </ViewPage>
      <ViewPage className="last">
        
      </ViewPage>
      <Footer />
    </React.Fragment>
  );
};
