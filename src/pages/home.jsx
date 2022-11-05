import About from "../components/about";
import Features from "../components/features";
import HomeSlider from "../components/home-slider";
import Location from "../components/location";
import PopularProducts from "../components/popular-products";
import Services from "../components/services";
import Team from "../components/team";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <About />
      <Services />
      <Location />
      <PopularProducts />
      <Team />
      <Features />
    </>
  );
};

export default Home;
