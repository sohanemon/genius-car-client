import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const HomeSlider = () => {
  return (
    <>
      <Swiper className='mySwiper h-96'>
        <SwiperSlide className=''>Slide 1</SwiperSlide>
        <SwiperSlide className=''>Slide 2</SwiperSlide>
        <SwiperSlide className=''>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
