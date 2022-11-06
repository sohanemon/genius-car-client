import { useForm } from "react-hook-form";
import PrimaryBtn from "../components/primaryBtn";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='grid grid-cols-2 items-center'>
      <section className='p-10'>
        <img src={require("../assets/images/login/login.svg").default} alt='' />
      </section>
      <section className='border-2 p-10 m-10 rounded-lg space-y-4'>
        <h1 className='text-4xl font-semibold text-center text-gray-700'>
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <InputField register={register} title='email' />
          <InputField register={register} title='password' />
          <PrimaryBtn className='w-full !rounded-lg !py-4 !font-semibold'>
            Login
          </PrimaryBtn>
        </form>
        <p className='font-medium text-center text-gray-700'>Or Sign In with</p>
        <div className='flex justify-center gap-4'>
          <img
            src={
              require("../assets/images/login/genius_car/Facebook.svg").default
            }
            alt=''
          />
          <img
            src={
              require("../assets/images/login/genius_car/Group 25.svg").default
            }
            alt=''
          />
          <img
            src={
              require("../assets/images/login/genius_car/Google.svg").default
            }
            alt=''
          />
        </div>
        <p className='text-lg text-center'>
          Have an account? <span className='text-red-500'>Sign In</span>
        </p>
      </section>
    </div>
  );
};

export default Login;

function InputField({ register, title }) {
  return (
    <div className='flex flex-col gap-4'>
      <label
        className='text-lg font-semibold text-gray-700 capitalize'
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className='border-2 placeholder:font-semibold py-4 px-6 rounded-lg outline-gray-500'
        type={title}
        id={title}
        {...register(title)}
        placeholder={`Your ${title}`}
      />
    </div>
  );
}
