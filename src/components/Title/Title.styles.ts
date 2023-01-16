import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

  const StyledTitle = styled(Typography)({
    fontSize: 36,
    color: colors.textPrimary,
    fontWeight: 700,
    "& span": {
      color: colors.primaryColor,
    },
    "& span:before": {
      content: '"_"'
    },
  });

  return { StyledTitle };
};
