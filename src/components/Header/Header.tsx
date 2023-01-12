import React from "react";
import { HeaderWrapper, NavBar, NavLink, Switch, Title } from "./Header.styles";

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Title>ArthurMTS</Title>

    <NavBar>
      <NavLink
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Home
      </NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <Switch />
    </NavBar>
  </HeaderWrapper>
);
