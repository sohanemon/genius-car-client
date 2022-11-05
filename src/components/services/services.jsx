import SecondaryBtn from "../secondaryBtn";
import Card from "./card";

const Services = () => {
  return (
    <section id='services '>
      <div className='text-center space-y-5'>
        <p className='text-xl font-bold text-red-600'>Services</p>
        <p className=' text-5xl font-bold text-gray-900'>Our Service Area</p>
        <p className='text-base leading-loose text-center text-gray-500 capitalize w-[60ch] mx-auto'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {[...Array(6).keys()].map((el) => (
          <Card key={el} />
        ))}
      </div>
      <div className='flex justify-center my-10'>
        <SecondaryBtn className={"font-semibold "}>More services</SecondaryBtn>
      </div>
    </section>
  );
};

export default Services;
