import React from "react";
import styles from "./Description.styles";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  const { DescriptionStyled } = styles();

  return <DescriptionStyled>{children}</DescriptionStyled>;
};
