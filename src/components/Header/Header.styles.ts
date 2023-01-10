import { styled, Typography } from "@mui/material";

export const HeaderWrapper = styled("header")({
  width: "100%",
  backgroundColor: "#353545",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 50px",
  position: "absolute",
  left: 0,
  top: 0,
  boxShadow: "10px 2px 25px #222",
});

export const Title = styled(Typography)({
  color: "#F7F7F7",
  fontSize: 26,
  transition: "all .2s",
  "&:before": {
    content: '"< "',
    color: "#F7F7F7",
  },
  "&:After": {
    content: '" />"',
    color: "#F7F7F7",
  },
  "&:hover": {
    color: "#0394fc",
  },
});

export const NavBar = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const NavLink = styled("a")({
  textDecoration: "none",
  color: "#F7F7F7",
  fontSize: 20,
  transition: "all .2s",
  padding: "30px 10px",
  "&:hover": {
    backgroundColor: "#0394fc",
  },
});
