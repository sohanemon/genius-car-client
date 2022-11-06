import bg from "../assets/images/checkout/checkout.png";
const Services = () => {
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
    </div>
  );
};

export default Services;
