import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const StyledTitle = styled(Typography)({
    fontSize: 36,
    color: colors.textPrimary,
    fontWeight: 700,
    "& span": {
      color: colors.primaryColor,
    },
    "& span:before": {
      content: '"_"',
    },
    "@media (max-width: 560px)": {
      "&": {
        fontSize: 26,
      },
    },
    "@media (max-width: 320px)": {
      "&": {
        fontSize: 20,
      },
    },
  });

  return { StyledTitle };
};

export default useStyles;
