import { styled } from "@mui/system";

export const ViewPage = styled("section")({
  width: "98.79vw",
  height: "100vh",
  backgroundColor: "#E7E7E7",
  "&.secondary": {
    backgroundColor: "#F7F7F7",
  },
  "&.last": {
    height: "calc(100vh - 100px)",
  },
});
