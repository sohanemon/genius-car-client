import img1 from "../../assets/images/team/1.jpg";
import { SocialIcon } from "react-social-icons";
const Card = () => {
  return (
    <div>
      <img src={img1} alt='' className='w-80 h-72 rounded-lg' />
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-bold text-center text-gray-700'>
          Car Engine Plug
        </p>
        <p className='text-xl font-semibold text-center text-gray-500'>
          Engine Expert
        </p>
        <div className='flex justify-center gap-2'>
          <SocialIcon url='https://sohanemon.netlify.app' network='facebook' />
          <SocialIcon url='https://sohanemon.netlify.app' network='twitter' />
          <SocialIcon url='https://sohanemon.netlify.app' network='linkedin' />
          <SocialIcon url='https://sohanemon.netlify.app' network='instagram' />
        </div>
      </div>
    </div>
  );
};

export default Card;
