import { Button, styled } from "@mui/material";

export const StyledHeader = styled("nav")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 36px",
  background: "#090b13",
  letterSpacing: "16px",
  zIndex: 3,
});

export const Logo = styled("a")({
  padding: "0",
  width: "80px",
  marginTop: "4px",
  minHeight: "70px",
  fontSize: "0",
  display: "inline-block",

  "& img": {
    display: "block",
    width: "100%",
  },
});

export const NavMenu = styled("ul")({
  display: "flex",
  alignItems: "center",
  flexFlow: "row nowrap",
  height: "100%",
  justifyContent: "flex-end",
  margin: "0px",
  padding: "0px",
  position: "relative",
  marginRight: "auto",
  marginLeft: "25px",
  "& a": {
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    cursor: "pointer",
    "& img": {
      height: "20px",
      minWidth: "20px",
      width: "20px",
      zIndex: "auto",
    },
    "& span": {
      color: "rgb(249, 249, 249)",
      fontSize: "13px",
      letterSpacing: "1.42px",
      lineHeight: "1.08",
      padding: "2px 0px",
      whiteSpace: "nowrap",
      position: "relative",

      "&:before": {
        background: "rgb(249, 249, 249)",
        borderRadius: "0px 0px 4px 4px",
        bottom: "-6px",
        content: '""',
        height: "2px",
        left: "0px",
        opacity: "0",
        position: "absolute",
        right: "0px",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
        visibility: "hidden",
        width: "auto",
      },
    },

    "&:hover": {
      "span:before": {
        transform: "scaleX(1)",
        visibility: "visible",
        opacity: "1 !important",
      },
    },
  },
  // "@media (max-width: 768px)": {
  //   display: "none",
  // },
});

export const Login = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "8px 16px",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  border: "1px solid #f9f9f9",
  color: "#fff",
  transition: "all 0.2s ease 0s",

  "&:hover": {
    backgroundColor: "#f9f9f9",
    color: "#000",
    borderColor: "transparent",
  },
});

export const UserImg = styled("img")({
  height: "100%",
});
