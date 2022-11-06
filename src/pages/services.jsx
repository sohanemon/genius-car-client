import { useForm } from "react-hook-form";
import bg from "../assets/images/checkout/checkout.png";
import PrimaryBtn from "../components/primaryBtn";

const Services = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <header className='relative rounded-2xl shadow-md overflow-hidden'>
        <img src={bg} alt='' />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/90 to-transparent' />
        <p className='text-5xl font-bold text-white absolute top-1/2 -translate-y-1/2 pl-20'>
          Add New Service
        </p>
        <div className='w-72 h-12 absolute bottom-0 left-1/2 -translate-x-1/2 trapezoid grid place-content-center'>
          <p className='text-lg text-white translate-y-6'>Home/Service</p>
        </div>
      </header>
      <br />
      <br />
      <br />
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-24 bg-gray-100 rounded-lg space-y-5'
        >
          <div className='grid grid-cols-2 gap-5'>
            <InputField
              register={register}
              name='serviceName'
              placeholder='Service name'
            />
            <InputField
              register={register}
              name='servicePrice'
              placeholder='Service price'
            />
            <InputField
              register={register}
              name='textHere'
              placeholder='Text here'
            />
            <InputField
              register={register}
              name='serviceType'
              placeholder='Service type'
            />
          </div>
          <InputField
            register={register}
            name='serviceType'
            placeholder='Service type'
            className='h-32'
          />
          <PrimaryBtn className={"w-full"}>Submit</PrimaryBtn>
        </form>
      </section>
    </div>
  );
};

export default Services;

function InputField({ register, name, placeholder, className }) {
  return (
    <input
      {...register(name)}
      type='text'
      placeholder={placeholder}
      className={`py-4 px-6 rounded-lg text-sm outline-gray-500 w-full ${className}`}
    />
  );
}
