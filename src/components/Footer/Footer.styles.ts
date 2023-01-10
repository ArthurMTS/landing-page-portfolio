import { styled, Typography } from "@mui/material";

export const FooterWrapper = styled("header")({
  width: "100%",
  backgroundColor: "#222",
  height: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const FooterText = styled(Typography)({
  color: "#F7F7F7",
  fontSize: 18,
});

export const FooterAuthor = styled("a")({
  textDecoration: "none",
  color: "#F7F7F7",
  cursor: "pointer",
  fontSize: 18,
  transition: "all .2s",
  "&:hover": {
    color: "#0394fc",
    "&:before": {
      content: '"< "',
      color: "#F7F7F7",
    },
    "&:after": {
      content: '" />"',
      color: "#F7F7F7",
    }
  },
});
