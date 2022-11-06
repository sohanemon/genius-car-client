import { Header } from "./../components/header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import PrimaryBtn from "../components/primaryBtn";
import { useAuth } from "../contexts/auth-provider";
import useScrollToTop from "../hooks/useScrollToTop";

const Services = () => {
  const params = useParams();
  useScrollToTop();
  const { user, isLoading } = useAuth();
  const [service, setService] = useState({});
  const { reset, register, handleSubmit } = useForm();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_host}/service/${params.id}`)
      .then((res) => {
        setService(res.data);
        reset({
          displayName: user?.displayName,
          email: user?.email,
          serviceName: res.data.title,
          description: res.data.description,
          servicePrice: res.data.price,
        });
      });

    return () => {};
  }, [isLoading]);

  const onSubmit = (data, e) => {
    axios.post(`${process.env.REACT_APP_host}/orders`, data).then((res) => {
      console.log(res);
      e.target.reset();
    });
  };

  return (
    <div>
      <Header pageName={"Services"} title={service?.title} />
      <br />
      <br />
      <br />
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-24 bg-gray-100 rounded-lg space-y-5'
        >
          <div className='grid grid-cols-2 gap-5'>
            {" "}
            <InputField
              register={register}
              name='displayName'
              placeholder='Your name'
            />
            <InputField
              register={register}
              name='email'
              placeholder='Your email'
            />
            <InputField
              defaultValue={service?.title}
              register={register}
              name='serviceName'
              placeholder='Service name'
            />
            <InputField
              defaultValue={service?.price}
              register={register}
              name='servicePrice'
              placeholder='Service price'
            />
          </div>
          <textarea
            rows={6}
            {...register("description")}
            placeholder='Description'
            className='py-4 px-6 rounded-lg text-sm outline-gray-500 w-full p-5 resize-y'
          />
          <PrimaryBtn className={"w-full"}>Submit</PrimaryBtn>
        </form>
      </section>
    </div>
  );
};

export default Services;

function InputField({ register, name, placeholder, className, defaultValue }) {
  return (
    <input
      {...register(name)}
      type='text'
      placeholder={placeholder}
      className={`py-4 px-6 rounded-lg text-sm outline-gray-500 w-full ${className}`}
    />
  );
}
