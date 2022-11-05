import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import Heading from "../heading";
import Card from "./card";

const Team = () => {
  return (
    <section id='team'>
      <Heading
        title={"Team"}
        details='Meet Our Team'
        descriptions={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <Swiper className='' slidesPerView={3} spaceBetween={25}>
        {[...Array(10).keys()].map((el) => (
          <SwiperSlide key={el}>
            <Card />
          </SwiperSlide>
        ))}
        <SwiperNavigation className='flex justify-between absolute left-0 top-1/2 -translate-y-1/2 w-full z-10' />
      </Swiper>
    </section>
  );
};

export default Team;
const SwiperNavigation = ({ className }) => {
  const [index, setIndex] = useState(0);
  const swipe = useSwiper();
  swipe.on("slideChange", () => {
    setIndex(swipe.realIndex);
  });
  const handlePrev = (e) => {
    swipe.slidePrev();
  };
  const handleNext = (e) => {
    swipe.slideNext();
  };

  return (
    <div className={className}>
      <button onClick={handlePrev}>
        <BsArrowLeft
          className={`${
            index === 0 ? "cursor-not-allowed bg-black/50" : "bg-red-600"
          } text-xl text-white h-12 w-12 p-3 rounded-full`}
        />
      </button>
      <button onClick={handleNext}>
        <BsArrowRight
          className={`${
            index === 9 ? "cursor-not-allowed bg-black/50" : "bg-red-600"
          } text-xl text-white h-12 w-12 p-3 rounded-full`}
        />
      </button>
    </div>
  );
};
