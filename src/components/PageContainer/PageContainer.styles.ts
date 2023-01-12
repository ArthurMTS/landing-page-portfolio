import { styled } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const PageContainerStyled = styled("section")({
  width: "99.3vw",
  height: "100vh",
  backgroundColor: colors.bgPrimary,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 80px",
  "&#skills": {
    justifyContent: "start !important",
    alignItems: "center",
    paddingTop: 80,
    flexDirection: "column",
  },
  "&.last": {
    backgroundColor: colors.bgSecondary,
    height: "calc(100vh - 60px)",
  },
});
