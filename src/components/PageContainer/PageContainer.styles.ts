import { styled } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

  const PageContainerStyled = styled("section")({
    width: "99.3vw",
    height: "100vh",
    backgroundColor: colors.backgroundPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
    "&.center": {
      justifyContent: "start !important",
      alignItems: "center",
      paddingTop: 80,
      flexDirection: "column",
    },
    "&.last": {
      backgroundColor: colors.backgroundSecondary,
      height: "calc(100vh - 60px)",
    },
  });

  return { PageContainerStyled };
};