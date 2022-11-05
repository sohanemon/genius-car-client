import img1 from "../../assets/images/team/1.jpg";
import { SocialIcon } from "react-social-icons";
const Card = () => {
  return (
    <div className='flex flex-col items-center p-6 border rounded-lg gap-3'>
      <img src={img1} alt='' className='w-80 h-72 rounded-lg' />
      <div className='flex flex-col items-center gap-1'>
        <p className='text-xl font-bold text-center text-gray-700'>
          Car Engine Plug
        </p>
        <p className='text-lg font-semibold text-center text-gray-500'>
          Engine Expert
        </p>
        <div className='flex justify-center gap-2'>
          <SocialIcon
            className='!w-8 !h-8'
            url='https://sohanemon.netlify.app'
            network='facebook'
          />
          <SocialIcon
            className='!w-8 !h-8'
            url='https://sohanemon.netlify.app'
            network='twitter'
          />
          <SocialIcon
            className='!w-8 !h-8'
            url='https://sohanemon.netlify.app'
            network='linkedin'
          />
          <SocialIcon
            className='!w-8 !h-8'
            url='https://sohanemon.netlify.app'
            network='instagram'
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
