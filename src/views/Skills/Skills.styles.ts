import { styled } from "@mui/system";

export const SkillsWrapper = styled("div")({
  marginTop: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  "@media (max-width: 1115px)": {
    "&": {
      flexWrap: "wrap",
      padding: "10px 0",
    },
  },
});
