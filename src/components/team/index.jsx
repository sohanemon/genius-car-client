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
      <div className='grid grid-cols-3 gap-6'>
        {[...Array(3).keys()].map((el) => (
          <Card key={el} />
        ))}
      </div>
    </section>
  );
};

export default Team;
