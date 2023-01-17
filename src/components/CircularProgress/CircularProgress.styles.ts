import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

const useStyles = () => {
  const { getTheme } = React.useContext(ThemeContext);
  const colors = getTheme();

  const Caption = styled(Typography)({
    color: colors.textPrimary,
    fontWeight: 700,
  });

  return { Caption };
};

export default useStyles;
