import { styled, Typography } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const StyledTitle = styled(Typography)({
  fontSize: 36,
  color: colors.primaryText,
  fontWeight: 700,
  "& span": {
    color: colors.primary,
  },
  "& span:before": {
    content: '"_"'
  },
});
