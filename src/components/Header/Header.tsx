import React from "react";
import { HeaderWrapper, NavBar, NavLink, Title } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>
        ArthurMTS
      </Title>

      <NavBar>
        <NavLink onClick={() => {window.scrollTo(0,0)}}>Home</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
      </NavBar>
    </HeaderWrapper>
  );
};
