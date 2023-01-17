import { styled, Typography, Switch as MuiSwitch } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const HeaderWrapper = styled("header")({
    width: "100%",
    backgroundColor: colors.backgroundPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 50px",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1,
    "@media (max-width: 600px)": {
      "&": {
        flexDirection: "column",
        paddingTop: 10,
      },
    },
  });

  const Title = styled(Typography)({
    color: colors.textPrimary,
    fontWeight: 700,
    fontSize: 26,
    transition: "all .2s",
    "&:before": {
      content: '"< "',
      color: colors.textPrimary,
    },
    "&:After": {
      content: '" />"',
      color: colors.textPrimary,
    },
    "&:hover": {
      color: colors.primaryColor,
    },
    "@media (max-width: 315px)": {
      "&": {
        fontSize: 20,
      },
    },
    "@media (max-width: 260px)": {
      "&": {
        fontSize: 16,
      },
    },
  });

  const NavBar = styled("nav")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const NavLink = styled("a")({
    cursor: "pointer",
    textDecoration: "none",
    color: colors.textPrimary,
    fontSize: 20,
    transition: "all .2s",
    padding: "20px 10px",
    "&:hover": {
      backgroundColor: colors.primaryColor,
    },
    "@media (max-width: 315px)": {
      "&": {
        fontSize: 16,
      },
    },
    "@media (max-width: 260px)": {
      "&": {
        fontSize: 12,
      },
    },
  });

  const Switch = styled(MuiSwitch)({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#222",
      "&:hover": {
        backgroundColor: "#222",
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#222",
    },
  });

  return { HeaderWrapper, Title, NavBar, NavLink, Switch };
};

export default useStyles;
