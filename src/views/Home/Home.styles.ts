import { styled } from "@mui/system";
import { colors } from "assets/pallet/colors";

export const HomeSide = styled("aside")({
  display: "flex",
  flexDirection: "column",
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
  color: colors.primaryText,
  backgroundColor: colors.primary,
  fontSize: 18,
  padding: "10px 15px",
  borderRadius: 50,
  alignSelf: "flex-start",
});
