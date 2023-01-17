import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const Card = styled("div")({
    height: 200,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    boxShadow: `-5px 5px 0px ${colors.primaryColor}`,
    position: "relative",
    transition: "all .2s",
    "&:hover a": {
      display: "flex",
    },
    "@media (max-width: 500px)": {
      "&": {
        height: 135,
        width: 135,
        gap: 5,
      },
    },
  });

  const Logo = styled("img")({
    width: 40,
    "@media (max-width: 500px)": {
      "&": {
        width: 25,
      },
    },
  });

  const Title = styled(Typography)({
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 700,
    "@media (max-width: 500px)": {
      "&": {
        fontSize: 12,
      },
    },
  });

  const Link = styled("a")({
    textDecoration: "none",
    fontSize: 20,
    color: colors.primaryColor,
    backgroundColor: colors.backgroundPrimary,
    width: "100%",
    height: "100%",
    opacity: ".9",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    display: "none",
  });

  return { Card, Logo, Title, Link };
};

export default useStyles;
