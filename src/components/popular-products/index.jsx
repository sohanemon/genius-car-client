import Heading from "../heading";
import SecondaryBtn from "../secondaryBtn";
import Card from "./card";

const PopularProducts = () => {
  return (
    <section id='popular'>
      <Heading
        title={"Popular Products"}
        details='  Browse Our Products'
        descriptions={
          "the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        }
      />

      <div className='grid grid-cols-3 gap-6 mt-12'>
        {[...Array(6).keys()].map((el) => (
          <Card key={el} />
        ))}
      </div>
      <div className='flex justify-center '>
        <SecondaryBtn className={"my-12"}>More products</SecondaryBtn>
      </div>
    </section>
  );
};

export default PopularProducts;
