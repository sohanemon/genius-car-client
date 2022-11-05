const Heading = ({ title, details, descriptions }) => {
  return (
    <>
      <div className='text-center space-y-5 my-10'>
        <p className='text-xl font-bold text-red-600'>{title}</p>
        <p className=' text-5xl font-bold text-gray-900'>{details}</p>
        <p className='text-base leading-loose text-center text-gray-500 capitalize w-[60ch] mx-auto'>
          {descriptions}
        </p>
      </div>
    </>
  );
};

export default Heading;
