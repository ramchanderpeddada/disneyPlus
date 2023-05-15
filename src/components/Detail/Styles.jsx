import { styled } from "@mui/material";

export const Container = styled("div")({
  position: "relative",
  minHeight: "calc(100vh-250px)",
  overflowX: "hidden",
  display: "block",
  top: "72px",
  padding: "0 calc(3.5w+ 5px)",
});

export const Background = styled("div")({
  left: "0px",
  opacity: "0.8",
  position: "fixed",
  right: "0px",
  top: "0px",
  zIndex: "1",

  img: {
    width: "100vw",
    height: "100vh",

    "@media (max-width: 768px)": {
      width: "initial",
    },
  },
});

export const ImageTitle = styled("div")({
  alignItems: "flex-end",
  display: "flex",
  justifyContent: "start",
  margin: "0px auto",
  height: "30vw",
  minHeight: "170px",
  paddingBottom: "24px",
  width: "100%",

  img: {
    maxWidth: "600px",
    width: "35vw",
    minWidth: "200px",
  },
});

export const ContentMeta = styled("div")({
  maxWidth: "874px",
});

export const Controls = styled("div")({
  display: "flex",
  alignItems: "center",
  flexFlow: "row nowrap",
  margin: "24px 0px",
  minHeight: "56px",
});

export const Player = styled("button")({
  fontSize: "15px",
  margin: "0px 22px 0px 0px",
  padding: "0px 24px",
  height: "56px",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: "1.8px",
  textAlign: "center",
  textTransform: "uppercase",
  background: "rgb (249, 249, 249)",
  border: "none",
  color: "rgb(0, 0, 0)",

  img: {
    width: "32px",
  },

  " &:hover": {
    background: " rgb(198, 198, 198)",
  },

  "@media (max-width: 768px)": {
    height: "45px",
    padding: "0px 12px",
    fontSize: "12px",
    margin: "0px 10px 0px 0px",

    img: {
      width: "25px",
    },
  },
});

export const Trailer = styled(Player)({
  background: "rgba(0, 0, 0, 0.3)",
  border: "1px solid rgb(249, 249, 249)",
  color: "rgb(249, 249, 249)",
});

export const AddList = styled("div")({
  marginRight: "16px",
  height: "44px",
  width: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "50%",
  border: "2px solid white",
  cursor: "pointer",

  "& span:first-child": {
    height: "2px",
    transform: "translate(1px, 0px) rotate(0deg)",
    width: "16px",
    backgroundColor: "rgb(249, 249, 249)",
    display: "inline-block",
  },

  "& span:nth-child(2)": {
    height: "16px",
    transform: "translateX(-8px) rotate(0deg)",
    width: "2px",
    backgroundColor: "rgb(249, 249, 249)",
    display: "inline-block",
  },
});

export const GroupWatch = styled("div")({
  height: "44px",
  width: "44px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  background: "white",

  "& div": {
    height: "40px",
    width: "40px",
    background: "rgb(0, 0, 0)",
    borderRadius: "50%",

    "& img": {
      width: "100%",
    },
  },
});

export const SubTitle = styled("div")({
  color: "rgb(249, 249, 249)",
  fontSize: "15px",
  minHeight: "20px",

  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
});

export const Description = styled("div")({
  lineHeight: "1.4",
  fontSize: "20px",
  padding: "16px 0px",
  color: "rgb(249, 249, 249)",

  "@media (max-width: 768px)": {
    fontSize: "14px",
  },
});
