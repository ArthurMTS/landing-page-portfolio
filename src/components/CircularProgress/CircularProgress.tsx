import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Caption } from "./CircularProgress.styles";
import { colors } from "assets/pallet/colors";

interface CircularProgressWithLabelProps {
  value: number,
}

export const CircularProgressWithLabel: React.FC<CircularProgressProps & CircularProgressWithLabelProps> = (
  props
) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress thickness={7} size={60} sx={{ color: colors.primary }} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Caption
          variant="caption"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Caption>
      </Box>
    </Box>
  );
};
