/* eslint-disable react-refresh/only-export-components */
import { Button, Typography, styled } from "@mui/material";

export const StyledContainer = styled("div")({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  height: "100vh",
});

export const StyledContent = styled("div")({
  marginBottom: "10vw",
  width: "100%",
  position: "relative",
  minHeight: "100vh",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "80px 40px",
  height: "100%",
});

export const BgImage = styled("div")({
  height: "100%",
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundImage: 'url("/images/login-background.jpg")',
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  zIndex: -1,
});

export const CTA = styled("div")({
  maxWidth: "650px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const CTALogoOne = styled("img")({
  marginBottom: "12px",
  maxWidth: "600px",
  minHeight: "1px",
  display: "block",
  width: "100%",
});

export const SignUp = styled(Button)({
  fontWeight: "bold",
  color: "#f9f9f9",
  backgroundColor: "#0063e5",
  marginBottom: "12px",
  width: "100%",
  letterSpacing: "1.5px",
  fontSize: "18px",
  padding: "16.5px 0",
  border: "1px solid transparent",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#0483ee",
  },
});

export const Description = styled(Typography)({
  color: "hsla(0, 0%, 95.3%, 1)",
  fontSize: "11px",
  margin: "0 0 24px",
  lineHeight: 1.5,
  letterSpacing: "1.5px",
});

export const CTALogoTwo = styled("img")({
  maxWidth: "600px",
  marginBottom: "20px",
  display: "inline-block",
  verticalAlign: "bottom",
  width: "100%",
});
