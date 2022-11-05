import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Heading from "./heading";

const Testimonial = () => {
  return (
    <section id='testimonial' className=''>
      <Heading
        title={"Testimonial"}
        details='What Customer Says'
        descriptions={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <Swiper slidesPerView={2} spaceBetween={25}>
        {data.map((el, i) => (
          <SwiperSlide key={i}>
            <Slide {...el} />
          </SwiperSlide>
        ))}{" "}
        <NavigationBtn className='flex w-full justify-between absolute top-1/2 -translate-y-1/2 z-10' />
      </Swiper>
    </section>
  );
};

export default Testimonial;

const Slide = ({ image, name, occupation, descriptions }) => {
  return (
    <div className='space-y-5 p-12 border rounded-xl'>
      <div className='flex gap-5 items-center'>
        <img src={image} alt='' className='w-14 h-14 rounded-full' />
        <div className='grow'>
          <p className='text-xl font-bold text-gray-700'>{name}</p>
          <p className='font-semibold text-gray-500'>{occupation}</p>
        </div>
        <img
          src={require("../assets/icons/quote.svg").default}
          alt=''
          className='w-12 h-12 justify-self-end'
        />
      </div>
      <article className='leading-loose text-sm text-gray-500 capitalize'>
        {descriptions}
      </article>
      <div className='flex gap-1'>
        {[...Array(5).keys()].map((el) => (
          <BsStarFill className='text-yellow-500' key={el} />
        ))}
      </div>
    </div>
  );
};
const NavigationBtn = ({ className }) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <button onClick={() => swiper.slidePrev()}>
        <BsArrowLeft
          className={`bg-red-500 text-xl text-white h-12 w-12 p-3 rounded-full`}
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <BsArrowRight
          className={`bg-red-500 text-xl text-white h-12 w-12 p-3 rounded-full`}
        />
      </button>
    </div>
  );
};

const data = [
  {
    image: require("../assets/images/team/2.jpg"),
    name: "Rakibul Islam",
    occupation: "Student",
    descriptions:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: require("../assets/images/team/2.jpg"),
    name: "Rakibul Islam",
    occupation: "Student",
    descriptions:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: require("../assets/images/team/2.jpg"),
    name: "Rakibul Islam",
    occupation: "Student",
    descriptions:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: require("../assets/images/team/2.jpg"),
    name: "Rakibul Islam",
    occupation: "Student",
    descriptions:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    image: require("../assets/images/team/2.jpg"),
    name: "Rakibul Islam",
    occupation: "Student",
    descriptions:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
];
