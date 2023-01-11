import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "assets/pallet/colors";

export const ViewPage = styled("section")({
  width: "99.3vw",
  height: "100vh",
  backgroundColor: colors.bgPrimary,
  "&.last": {
    backgroundColor: colors.bgSecondary,
    height: "calc(100vh - 60px)",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 80px",
});

export const HomeSide = styled("aside")({
  display: "flex",
  flexDirection: "column",
});

export const HomeTitle = styled(Typography)({
  fontSize: 36,
  color: colors.primaryText,
  "& span": {
    color: colors.primary,
  },
});

export const HomeDescription = styled(Typography)({
  fontSize: 20,
  color: colors.primarySubtext,
  width: 550,
  "& span": {
    color: colors.green,
  },
  margin: "20px 0",
});

export const HomeImage = styled("img")({
  width: 350,
  transform: "rotate(-20deg)",
  boxShadow: `-20px 20px 0px ${colors.primary}`,
  borderRadius: 20,
  marginRight: 60,
});

export const HomeButton = styled("a")({
  textDecoration: "none",
  //color: colors.primary,
  //border: `2px solid ${colors.primary}`,
  color: colors.primaryText,
  backgroundColor: colors.primary,
  fontSize: 18,
  padding: "10px 15px",
  borderRadius: 50,
  alignSelf: "flex-start",
});
