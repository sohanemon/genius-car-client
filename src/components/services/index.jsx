import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../heading";
import SecondaryBtn from "../secondaryBtn";
import Card from "./card";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_host}/services`)
      .then((res) => setServices(res.data));
    return () => {};
  }, []);
  return (
    <section id='services'>
      <Heading
        title={"Service"}
        details='Our Service Area'
        descriptions={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {services?.map((el) => (
          <Card key={el._id} {...el} />
        ))}
      </div>
      <div className='flex justify-center my-10'>
        <SecondaryBtn className={"font-semibold "}>More services</SecondaryBtn>
      </div>
    </section>
  );
};

export default Services;
