import React from "react";
import styles from "./Title.styles";

interface TitleProps {
  id?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ id, children }) => {
  const { StyledTitle } = styles();

  return <StyledTitle id={id}>{children}</StyledTitle>;
};
