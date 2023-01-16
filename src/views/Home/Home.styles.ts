import { styled } from "@mui/system";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

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

export default useStyles;