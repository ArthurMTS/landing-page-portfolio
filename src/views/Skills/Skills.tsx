import React from "react";
import { SkillsWrapper } from "./Skills.styles";
import JestIcon from "assets/images/JestIcon.png";
import MuiIcon from "assets/images/MuiIcon.png";
import NodeIcon from "assets/images/NodeIcon.png";
import ReactIcon from "assets/images/ReactIcon.png";
import TypescriptIcon from "assets/images/TypescriptIcon.png";
import { PageContainer } from "components/PageContainer";
import { Title } from "components/Title";
import { Description } from "components/Description";
import { SkillCard } from "components/SkillCard";

export const Skills: React.FC = () => (
  <PageContainer id="skills">
    <Title>
      <span>S</span>kills
    </Title>
    <Description>
      These are the skills i'm most familiar with, i have been studying
      front-end development for 4 years already, and these tools are the ones i
      use more frequently.
    </Description>
    <SkillsWrapper>
      <SkillCard
        title="ReactJS"
        icon={ReactIcon}
        alt="React logo"
        progress={80}
        url="https://en.reactjs.org/"
      />
      <SkillCard
        title="TypeScript"
        icon={TypescriptIcon}
        alt="Typescript logo"
        progress={70}
        url="https://www.typescriptlang.org/"
      />
      <SkillCard
        title="Material-UI"
        icon={MuiIcon}
        alt="Mui logo"
        progress={65}
        url="https://mui.com/"
      />
      <SkillCard
        title="NodeJS"
        icon={NodeIcon}
        alt="Node logo"
        progress={50}
        url="https://nodejs.org/en/"
      />
      <SkillCard
        title="Jest"
        icon={JestIcon}
        alt="Jest logo"
        progress={50}
        url="https://jestjs.io"
      />
    </SkillsWrapper>
  </PageContainer>
);
