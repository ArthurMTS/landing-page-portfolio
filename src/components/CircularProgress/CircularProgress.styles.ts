import { styled, Typography } from "@mui/material";
import { ThemeContext } from "Contexts/theme";
import React from "react";

export default () => {
  const { colors } = React.useContext(ThemeContext);

  const Caption = styled(Typography)({
    color: colors.textPrimary,
    fontWeight: 700,
  });

  return { Caption }
};
