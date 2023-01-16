import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const DescriptionStyled = styled(Typography)({
    fontSize: 16,
    color: colors.description,
    width: 550,
    "& span": {
      color: colors.green,
    },
    margin: "20px 0",
  });

  return { DescriptionStyled };
};

export default useStyles;
