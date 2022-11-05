import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import banner1 from "../assets/images/banner/1.jpg";
import banner2 from "../assets/images/banner/2.jpg";
import banner3 from "../assets/images/banner/3.jpg";
import banner4 from "../assets/images/banner/4.jpg";
import banner5 from "../assets/images/banner/5.jpg";
import banner6 from "../assets/images/banner/6.jpg";
import PrimaryBtn from "./primaryBtn";
import SecondaryBtn from "./secondaryBtn";
import { useEffect, useState } from "react";
const HomeSlider = () => {
  return (
    <>
      <Swiper className='mySwiper h-[470px] rounded-lg overflow-hidden'>
        {banners.map((el) => (
          <SwiperSlide className='relative '>
            <img
              src={el}
              alt=''
              className='absolute top-0 left-0 w-full h-full object-cover origin-top object-top'
            />
            <div className='z-10 absolute top-0 h-full w-full bg-gradient-to-r from-black/90 to-transparent text-white p-20 space-y-7'>
              <p className='text-5xl font-semibold w-[10ch]'>
                Affordable Price For Car Servicing
              </p>
              <p>
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>
              <div className='space-x-5'>
                <PrimaryBtn>Discover more</PrimaryBtn>
                <SecondaryBtn className='!text-white'>
                  Latest project
                </SecondaryBtn>{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavigation className='absolute bottom-10 right-10 space-x-3 [&_button]:cursor-pointer z-10' />
      </Swiper>
    </>
  );
};

export default HomeSlider;

const banners = [banner5, banner1, banner2, banner3, banner4, banner6];

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
            index === banners.length - 1
              ? "cursor-not-allowed bg-black/50"
              : "bg-red-600"
          } text-xl text-white h-12 w-12 p-3 rounded-full`}
        />
      </button>
    </div>
  );
};
