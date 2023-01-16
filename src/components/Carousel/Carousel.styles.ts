import { styled } from "@mui/system";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

  const CarouselStyled = styled("div")({
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
    border: `5px solid ${colors.primaryColor}`,
  });
  
  const CarouselInner = styled("div")({
    display: "flex",
    transition: "transform 0.3s",
    
  });
  
  const Navigate = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingBottom: 10,
  });
  
  const CircleButton = styled("div")({
    width: 25,
    height: 25,
    border: `3px solid ${colors.primaryColor}`,
    color: colors.textPrimary,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&.active": {
      backgroundColor: colors.primaryColor,
    },
  });
  
  const CarouselImage = styled("img")({
    width: "100%",
    height: "100%",
    position: "relative",
  });
  

  return { CarouselStyled, CarouselInner, Navigate, CircleButton, CarouselImage };
};
