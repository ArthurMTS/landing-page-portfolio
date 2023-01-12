import React from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
  id?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ id, children }) => (
  <StyledTitle id={id}>{children}</StyledTitle>
);
