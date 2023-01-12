import { styled, Typography } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const Card = styled("div")({
  height: 200,
  width: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  backgroundColor: colors.bgSecondary,
  borderRadius: 20,
  boxShadow: `-5px 5px 0px ${colors.primary}`,
  position: "relative",
  transition: "all .2s",
  "&:hover a": {
    display: "flex",
  },
});

export const Logo = styled("img")({
  width: 40,
});

export const Title = styled(Typography)({
  color: colors.primaryText,
  fontSize: 18,
  fontWeight: 700,
});

export const Link = styled("a")({
  textDecoration: "none",
  fontSize: 20,
  color: colors.primary,
  backgroundColor: colors.bgPrimary,
  width: "100%",
  height: "100%",
  opacity: ".9",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  display: "none",
});
