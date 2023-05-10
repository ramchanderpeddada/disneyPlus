import ImgSlider from "../ImgSlider/ImgSlider";
import { Container } from "./Styles";
import Viewers from "../Viewers/Viewers";
const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

export default Home;
