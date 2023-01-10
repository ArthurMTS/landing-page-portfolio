import React from "react";
import { HeaderWrapper, NavBar, NavLink, Title } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>
        ArthurMTS
      </Title>

      <NavBar>
        <NavLink href="#">INÍCIO</NavLink>
        <NavLink href="#">PROJETOS</NavLink>
        <NavLink href="#">HABILIDADES</NavLink>
      </NavBar>
    </HeaderWrapper>
  );
};
