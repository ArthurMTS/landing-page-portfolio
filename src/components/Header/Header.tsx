import React from "react";
import { HeaderWrapper, NavBar, NavLink, Title } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>
        ArthurMTS
      </Title>

      <NavBar>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Skills</NavLink>
        <NavLink href="#">Portfolio</NavLink>
      </NavBar>
    </HeaderWrapper>
  );
};
