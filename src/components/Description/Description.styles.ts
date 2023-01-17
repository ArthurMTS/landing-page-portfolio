import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const DescriptionStyled = styled(Typography)({
    fontSize: 16,
    color: colors.description,
    width: "40vw",
    "& span": {
      color: colors.green,
    },
    margin: "20px 0",
    "@media (max-width: 900px)": {
      "&": {
        width: "50vw",
      },
    },
    "@media (max-width: 560px)": {
      "&": {
        fontSize: 12,
      },
    },
    "@media (max-width: 450px)": {
      "&": {
        width: "65vw",
      },
    },
    "@media (max-width: 320px)": {
      "&": {
        fontSize: 10,
      },
    },
  });

  return { DescriptionStyled };
};

export default useStyles;
