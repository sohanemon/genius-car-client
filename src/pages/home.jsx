import About from "../components/about";
import HomeSlider from "../components/home-slider";
import Location from "../components/location";
import Services from "../components/services/services";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <About />
      <Services />
      <Location />
    </>
  );
};

export default Home;
