import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import { HomeButton, HomeDescription, HomeImage, HomeSide, HomeTitle, ViewPage } from "./Home.styles";
import MyPhoto from "assets/images/me.jpg";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ViewPage>
        <HomeSide>
          <HomeTitle id="home"><span>_H</span>ello, i'm Arthur 😎</HomeTitle>
          <HomeDescription>I'm a <span>Brazilian</span> Software Engineer and Web Developer, i was born in Jaguaruana-CE and i'm 23 years old</HomeDescription>
          <HomeButton href="https://www.linkedin.com/in/arthur-silva-24736320a/" target="_blank">Contact me</HomeButton>
        </HomeSide>
        <HomeImage src={MyPhoto} alt="Arthur being weird" />
      </ViewPage>
      <ViewPage id="skills">
        
      </ViewPage>
      <ViewPage id="portfolio" className="last">
        
      </ViewPage>
      <Footer />
    </React.Fragment>
  );
};
