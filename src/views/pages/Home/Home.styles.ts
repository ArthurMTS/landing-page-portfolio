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
  "&#skills": {
    justifyContent: "start !important",
    alignItems: "center",
    paddingTop: 80,
    flexDirection: "column",
  },
});

export const HomeSide = styled("aside")({
  display: "flex",
  flexDirection: "column",
});

export const HomeTitle = styled(Typography)({
  fontSize: 36,
  color: colors.primaryText,
  fontWeight: 700,
  "& span": {
    color: colors.primary,
  },
});

export const HomeDescription = styled(Typography)({
  fontSize: 16,
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

export const SkillsWrapper = styled("div")({
  marginTop: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
});

export const SkillsCard = styled("div")({
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

export const SkillLogo = styled("img")({
  width: 40,
});

export const SkillTitle = styled(Typography)({
  color: colors.primaryText,
  fontSize: 18,
  fontWeight: 700,
});

export const SkillLink = styled("a")({
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
