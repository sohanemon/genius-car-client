import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <div className=' items-start justify-end px-36 py-32 bg-gray-900 w-screen absolute left-0 mt-36 grid grid-cols-5'>
        <div className='col-span-2 space-y-5'>
          <img src={require("../assets/logo.svg").default} alt='' />
          <p className='text-sm leading-relaxed text-gray-200 w-[35ch]'>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className='space-x-2'>
            <SocialIcon network='facebook' className='!h-7 !w-7' />
            <SocialIcon network='facebook' className='!h-7 !w-7' />
            <SocialIcon network='facebook' className='!h-7 !w-7' />
            <SocialIcon network='facebook' className='!h-7 !w-7' />
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold text-white mb-10'>About</h1>
          <p className='leading-10 text-gray-100'>
            Home
            <br />
            Service
            <br />
            Contact
          </p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold text-white mb-10'>About</h1>
          <p className='leading-10 text-gray-100'>
            Home
            <br />
            Service
            <br />
            Contact
          </p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold text-white mb-10'>About</h1>
          <p className='leading-10 text-gray-100'>
            Home
            <br />
            Service
            <br />
            Contact
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
