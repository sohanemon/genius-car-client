import PrimaryBtn from "./primaryBtn";
import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <section
      id='about'
      className='grid grid-cols-2 h-screen items-center gap-10 pb-10'
    >
      <div className='relative h-96'>
        <img
          src={person}
          alt=''
          className='absolute w-[380px] h-[400px] object-cover rounded-xl'
        />
        <img
          src={parts}
          alt=''
          className='absolute w-72 h-72 object-cover border-[8px] border-white rounded left-1/2 top-1/2'
        />
      </div>
      <div className='space-y-7'>
        <p className='text-xl font-bold text-red-600'>About Us</p>
        <p className='text-5xl font-bold text-gray-900'>
          We are qualified & of experience in this field
        </p>
        <p className='leading-loose text-gray-500 capitalize'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className=' leading-loose text-gray-500 capitalize'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <PrimaryBtn>Get more info</PrimaryBtn>
      </div>
    </section>
  );
};

export default About;
