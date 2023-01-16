import React from "react";
import useStyles from "./Title.styles";

interface TitleProps {
  id?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ id, children }) => {
  const { StyledTitle } = useStyles();

  return <StyledTitle id={id}>{children}</StyledTitle>;
};
