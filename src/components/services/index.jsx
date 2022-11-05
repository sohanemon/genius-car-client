import Heading from "../heading";
import SecondaryBtn from "../secondaryBtn";
import Card from "./card";

const Services = () => {
  return (
    <section id='services '>
      <Heading
        title={"Service"}
        details='Our Service Area'
        descriptions={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
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
