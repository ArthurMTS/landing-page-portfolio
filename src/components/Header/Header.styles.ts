import { styled, Typography, Switch as MuiSwitch } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

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

  return { HeaderWrapper, Title, NavBar, NavLink, Switch, };
};