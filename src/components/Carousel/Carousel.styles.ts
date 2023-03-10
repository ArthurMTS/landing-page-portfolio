import { styled } from "@mui/system";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const CarouselStyled = styled("div")({
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
    border: `5px solid ${colors.primaryColor}`,
    "@media (max-width: 630px)": {
      "&": {
        width: "90vw !important",
      },
    },
  });

  const CarouselInner = styled("div")({
    display: "flex",
    transition: "all 0.3s",
  });

  const Navigate = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingBottom: 10,
    "@media (max-width: 370px)": {
      "&": {
        gap: 5,
      },
    },
  });

  const CircleButton = styled("div")({
    width: 25,
    height: 25,
    border: `3px solid ${colors.primaryColor}`,
    color: colors.textPrimary,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&.active": {
      backgroundColor: colors.primaryColor,
    },
    "@media (max-width: 370px)": {
      "&": {
        width: 15,
        height: 15,
      },
    },
  });

  const CarouselImage = styled("img")({
    width: "100%",
    height: "100%",
    position: "relative",
  });

  return {
    CarouselStyled,
    CarouselInner,
    Navigate,
    CircleButton,
    CarouselImage,
  };
};

export default useStyles;
