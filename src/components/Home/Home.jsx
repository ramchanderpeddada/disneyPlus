/* eslint-disable react-hooks/exhaustive-deps */
import ImgSlider from "../ImgSlider/ImgSlider";
import { Container } from "./Styles";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Recommends";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trending from "../Trending/Trending";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movies/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import db from "../firebase";
import { CircularProgress, styled } from "@mui/material";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    setIsLoading(true);
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
      setIsLoading(false);
    });
  }, [userName]);

  const LoadingContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
  });
  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress color="secondary" />
        </LoadingContainer>
      ) : (
        <>
          <ImgSlider />
          <Viewers />
          <Recommends />
          <NewDisney />
          <Originals />
          <Trending />
        </>
      )}
    </Container>
  );
};

export default Home;
