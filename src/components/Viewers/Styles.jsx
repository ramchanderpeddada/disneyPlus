import { styled } from "@mui/material";

export const Container = styled("div")({
  marginTop: "30px",
  padding: "30px 0 26px",
  display: "grid",
  gridGap: "25px",
  gap: "25px",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
});

export const Wrap = styled("div")({
  paddingTop: "56.25%",
  borderRadius: "10px",
  boxShadow:
    "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
  border: "3px solid rgba(249, 249, 249, 0.1)",

  img: {
    inset: "0px",
    display: "block",
    height: "100%",
    objectFit: "cover",
    opacity: "1",
    position: "absolute",
    transition: "opacity 500ms ease-in-out 0s",
    width: "100%",
    zIndex: "1",
    top: "0",
  },

  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    opacity: "0",
    zIndex: "0",
  },
  
  "&:hover": {
    boxShadow:
      "rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px",
    transform: "scale(1.05)",
    borderColor: "rgba(249, 249, 249, 0.8)",
    video: {
      opacity: "1",
    },
  },
});
