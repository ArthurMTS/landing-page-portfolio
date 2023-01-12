import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import { HomeButton, HomeDescription, HomeImage, HomeSide, HomeTitle, SkillLink, SkillLogo, SkillsCard, SkillsWrapper, SkillTitle, ViewPage } from "./Home.styles";
import { CircularProgressWithLabel } from "components/CircularProgress";
import MyPhoto from "assets/images/me.jpg";
import JestIcon from "assets/images/JestIcon.png";
import MuiIcon from "assets/images/MuiIcon.png";
import NodeIcon from "assets/images/NodeIcon.png";
import ReactIcon from "assets/images/ReactIcon.png";
import TypescriptIcon from "assets/images/TypescriptIcon.png";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ViewPage>
        <HomeSide>
          <HomeTitle id="home"><span>_H</span>i, i'm Arthur Silva 😎</HomeTitle>
          <HomeDescription>I'm a <span>Brazilian</span> Software Engineer and Web Developer, i was born in Jaguaruana-CE and i'm 23 years old.</HomeDescription>
          <HomeButton href="https://www.linkedin.com/in/arthur-silva-24736320a/" target="_blank">Contact me</HomeButton>
        </HomeSide>
        <HomeImage src={MyPhoto} alt="Arthur being weird" />
      </ViewPage>
      <ViewPage id="skills">
        <HomeTitle><span>_S</span>kills</HomeTitle>
        <HomeDescription>These are the skills i'm most familiar with, i have been studying front-end development for 4 years already, and these tools are the ones i use more frequently.</HomeDescription>
        <SkillsWrapper>
          <SkillsCard>
            <SkillLogo src={ReactIcon} alt="React logo" />
            <SkillTitle>ReactJS</SkillTitle>
            <CircularProgressWithLabel value={80} />
            <SkillLink href="https://en.reactjs.org/" target="_blank">
              Learn More
            </SkillLink>
          </SkillsCard>
          <SkillsCard>
            <SkillLogo src={TypescriptIcon} alt="Typescript logo" />
            <SkillTitle>TypeScript</SkillTitle>
            <CircularProgressWithLabel value={70} />
            <SkillLink href="https://www.typescriptlang.org/" target="_blank">
              Learn More
            </SkillLink>
          </SkillsCard>
          <SkillsCard>
            <SkillLogo src={MuiIcon} alt="Mui logo" />
            <SkillTitle>Material-UI</SkillTitle>
            <CircularProgressWithLabel value={65} />
            <SkillLink href="https://mui.com/" target="_blank">
              Learn More
            </SkillLink>
          </SkillsCard>
          <SkillsCard>
            <SkillLogo src={NodeIcon} alt="Node logo" />
            <SkillTitle>NodeJS</SkillTitle>
            <CircularProgressWithLabel value={50} />
            <SkillLink href="https://nodejs.org/en/" target="_blank">
              Learn More
            </SkillLink>
          </SkillsCard>
          <SkillsCard>
            <SkillLogo src={JestIcon} alt="Jest logo" />
            <SkillTitle>Jest</SkillTitle>
            <CircularProgressWithLabel value={50} />
            <SkillLink href="https://jestjs.io" target="_blank">
              Learn More
            </SkillLink>
          </SkillsCard>
        </SkillsWrapper>
      </ViewPage>
      <ViewPage id="portfolio" className="last">
      </ViewPage>
      <Footer />
    </React.Fragment>
  );
};
