import { styled } from "@mui/system";
import { colors } from "assets/pallet/colors";

export const CarouselStyled = styled("div")({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  borderRadius: 20,
  border: `5px solid ${colors.primary}`,
});

export const CarouselInner = styled("div")({
  display: "flex",
  transition: "transform 0.3s",
  
});

export const Navigate = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  paddingBottom: 10,
});

export const CircleButton = styled("div")({
  width: 25,
  height: 25,
  border: `3px solid ${colors.primary}`,
  color: colors.primaryText,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&.active": {
    backgroundColor: colors.primary,
  },
});

export const CarouselImage = styled("img")({
  width: "100%",
  height: "100%",
  position: "relative",
});
