import React from "react";
import styles from "./Home.styles";
import MyPhoto from "assets/images/me.jpg";
import { PageContainer } from "components/PageContainer";
import { Title } from "components/Title";
import { Description } from "components/Description";

export const Home: React.FC = () => {
  const { HomeButton, HomeImage, HomeSide } = styles();

  return (
  <PageContainer>
    <HomeSide>
      <Title id="home">
        <span>H</span>i, i'm Arthur Silva 😎
      </Title>
      <Description>
        I'm a <span>Brazilian</span> Software Engineer and Web Developer, i was
        born in Jaguaruana-CE and i'm 23 years old.
      </Description>
      <HomeButton
        href="https://www.linkedin.com/in/arthur-silva-24736320a/"
        target="_blank"
      >
        Contact me
      </HomeButton>
    </HomeSide>
    <HomeImage src={MyPhoto} alt="Arthur being weird" />
  </PageContainer>
)};
