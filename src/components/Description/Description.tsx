import React from "react";
import { DescriptionStyled } from "./Description.styles";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({ children }) => (
  <DescriptionStyled>{children}</DescriptionStyled>
);
