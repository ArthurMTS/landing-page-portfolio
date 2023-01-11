import { styled } from "@mui/system";
import { colors } from "assets/pallet/colors";

export const ViewPage = styled("section")({
  width: "98.79vw",
  height: "100vh",
  backgroundColor: colors.bgPrimary,
  "&.last": {
    backgroundColor: colors.bgSecondary,
    height: "calc(100vh - 60px)",
  },
});