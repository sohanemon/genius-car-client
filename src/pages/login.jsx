import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/primaryBtn";
import { useAuth } from "../contexts/auth-provider";

const Login = ({ signUp }) => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='grid grid-cols-2 items-center'>
      <section className='p-20'>
        <img src={require("../assets/images/login/login.svg").default} alt='' />
      </section>
      <section className='border-2 p-10 m-10 rounded-lg space-y-4'>
        <h1 className='text-4xl font-semibold text-center text-gray-700'>
          {signUp ? "Sign Up" : "Login"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <InputField register={register} title='email' />
          <InputField register={register} title='password' />
          {signUp && <InputField register={register} title='password' twice />}
          <PrimaryBtn className='w-full !rounded-lg !py-4 !font-semibold'>
            {signUp ? "Sign up" : "Login"}
          </PrimaryBtn>
        </form>
        <p className='font-medium text-center text-gray-700'>
          Or Sign {signUp ? "up" : "in"} with
        </p>
        <div className='flex justify-center gap-4'>
          <img
            className='cursor-pointer'
            src={
              require("../assets/images/login/genius_car/Facebook.svg").default
            }
            alt=''
          />
          <img
            className='cursor-pointer'
            src={
              require("../assets/images/login/genius_car/Group 25.svg").default
            }
            alt=''
          />
          <img
            onClick={() => googleLogin().then(() => navigate("/"))}
            className='cursor-pointer'
            src={
              require("../assets/images/login/genius_car/Google.svg").default
            }
            alt=''
          />
        </div>
        <p className='text-lg text-center'>
          {signUp ? "Have" : "Don't have"} an account?{" "}
          <span
            onClick={() =>
              signUp ? navigate("/login") : navigate("/register")
            }
            className='text-red-500 cursor-pointer'
          >
            Sign {signUp ? "in" : "up"}
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;

function InputField({ register, title, twice }) {
  return (
    <div className='flex flex-col gap-4'>
      <label
        className='text-lg font-semibold text-gray-700 capitalize'
        htmlFor={twice ? "confirm" : title}
      >
        {twice ? "Confirm password" : title}
      </label>
      <input
        className='border-2 placeholder:font-semibold py-4 px-6 rounded-lg outline-gray-500'
        type={title}
        id={twice ? "confirm" : title}
        {...register(twice ? "confirm" : title)}
        placeholder={`Your ${title} ${twice && "again"}`}
      />
    </div>
  );
}
