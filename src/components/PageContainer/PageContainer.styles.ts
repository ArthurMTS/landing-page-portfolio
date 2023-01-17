import { styled } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const PageContainerStyled = styled("section")({
    width: "99.3vw",
    minHeight: "100vh",
    backgroundColor: colors.backgroundPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5.5vw",
    "&.center": {
      justifyContent: "start !important",
      alignItems: "center",
      paddingTop: 80,
      flexDirection: "column",
      "@media (max-width: 600px)": {
        "&": {
          paddingTop: 120,
        },
      },
    },
    "&.last": {
      backgroundColor: colors.backgroundSecondary,
      height: "calc(100vh - 60px)",
    },
    "@media (max-width: 900px)": {
      "&": {
        justifyContent: "center",
      },
    },
  });

  return { PageContainerStyled };
};

export default useStyles;
