import { styled } from "@mui/system";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

  const HomeSide = styled("aside")({
    display: "flex",
    flexDirection: "column",
  });
  
  const HomeImage = styled("img")({
    width: 350,
    transform: "rotate(-20deg)",
    boxShadow: `-20px 20px 0px ${colors.primaryColor}`,
    borderRadius: 20,
    marginRight: 60,
  });
  
  const HomeButton = styled("a")({
    textDecoration: "none",
    color: "#F7F7F7",
    backgroundColor: colors.primaryColor,
    fontSize: 18,
    padding: "10px 15px",
    borderRadius: 50,
    alignSelf: "flex-start",
  });

  return { HomeSide, HomeImage, HomeButton }
};