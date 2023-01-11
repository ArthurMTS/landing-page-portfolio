import { styled, Typography } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const FooterWrapper = styled("header")({
  width: "100%",
  backgroundColor: colors.bgPrimary,
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
});

export const FooterCopy = styled(Typography)({
  color: colors.secondaryText,
  fontSize: 14,
});

export const FooterLink = styled("a")({
  textDecoration: "none",
  color: colors.secondaryText,
  cursor: "pointer",
  fontSize: 14,
  transition: "all .2s",
  "&:hover": {
    color: colors.primary,
  },
});

export const FooterIcons = styled("div")({
  display: "flex",
  gap: 15,
  alignItems: "center",
  "& img": {
    cursor: "pointer",
  },
});
