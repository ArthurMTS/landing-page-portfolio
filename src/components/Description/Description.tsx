import React from "react";
import useStyles from "./Description.styles";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  const { DescriptionStyled } = useStyles();

  return <DescriptionStyled>{children}</DescriptionStyled>;
};
