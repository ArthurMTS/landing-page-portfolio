import React from "react";
import { PageContainer } from "components/PageContainer";
import { Title } from "components/Title";
import { Description } from "components/Description";
import { Carousel, CarouselItem } from "components/Carousel";
import Battleship from "assets/images/battleship.PNG";
import CvCreator from "assets/images/cvCreator.PNG";
import LandingPage from "assets/images/landingPage.PNG";
import MemoryGame from "assets/images/memoryGame.PNG";
import ProductShopping from "assets/images/productShopping.PNG";
import SimpleLogin from "assets/images/simpleLogin.PNG";
import WeatherApp from "assets/images/weatherApp.PNG";

export const Portfolio: React.FC = () => {
  return (
    <PageContainer id="portfolio" className="last center">
      <Title><span>P</span>ortfolio</Title>
      <Description>
        Here are some of the projects that i have made in my journey as a Web Developer.
      </Description>
      <Carousel width="580px" >
        <CarouselItem img={Battleship} />
        <CarouselItem img={CvCreator} />
        <CarouselItem img={LandingPage} />
        <CarouselItem img={MemoryGame} />
        <CarouselItem img={ProductShopping} />
        <CarouselItem img={SimpleLogin} />
        <CarouselItem img={WeatherApp} />
      </Carousel>
    </PageContainer>
  );
};
