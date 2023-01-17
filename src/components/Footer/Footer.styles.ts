import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const FooterWrapper = styled("header")({
    width: "100%",
    backgroundColor: colors.backgroundPrimary,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    "@media (max-width: 260px)": {
      "&": {
        flexDirection: "column",
        padding: "10px 0",
        gap: 5,
      },
    },
  });

  const FooterCopy = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.textSecondary,
    fontSize: 14,
    "@media (max-width: 260px)": {
      "&": {
        fontSize: 12,
      },
    },
  });

  const FooterLink = styled("a")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: colors.textSecondary,
    cursor: "pointer",
    fontSize: 14,
    transition: "all .2s",
    "&:hover": {
      color: colors.primaryColor,
    },
    "@media (max-width: 260px)": {
      "&": {
        fontSize: 12,
      },
    },
  });

  const FooterIcons = styled("div")({
    display: "flex",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      cursor: "pointer",
    },
  });

  return { FooterWrapper, FooterCopy, FooterLink, FooterIcons };
};

export default useStyles;
