import { styled, Typography, Switch as MuiSwitch } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const HeaderWrapper = styled("header")({
  width: "100%",
  backgroundColor: colors.bgPrimary,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 50px",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1,
});

export const Title = styled(Typography)({
  color: colors.primaryText,
  fontWeight: 700,
  fontSize: 26,
  transition: "all .2s",
  "&:before": {
    content: '"< "',
    color: colors.primaryText,
  },
  "&:After": {
    content: '" />"',
    color: colors.primaryText,
  },
  "&:hover": {
    color: colors.primary,
  },
});

export const NavBar = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const NavLink = styled("a")({
  cursor: "pointer",
  textDecoration: "none",
  color: colors.primaryText,
  fontSize: 20,
  transition: "all .2s",
  padding: "20px 10px",
  "&:hover": {
    backgroundColor: colors.primary,
  },
});

export const Switch = styled(MuiSwitch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: colors.bgPrimary,
    "&:hover": {
      backgroundColor: colors.bgPrimary,
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: colors.bgPrimary,
  },
});
