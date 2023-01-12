import { styled, Typography } from "@mui/material";
import { colors } from "assets/pallet/colors";

export const DescriptionStyled = styled(Typography)({
  fontSize: 16,
  color: colors.primarySubtext,
  width: 550,
  "& span": {
    color: colors.green,
  },
  margin: "20px 0",
});
