import About from "../components/about";
import Features from "../components/features";
import Footer from "../components/footer";
import HomeSlider from "../components/home-slider";
import Location from "../components/location";
import PopularProducts from "../components/popular-products";
import Services from "../components/services";
import Team from "../components/team";
import Testimonial from "../components/testimonial";

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
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
