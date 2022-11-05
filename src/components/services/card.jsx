import { BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/images/services/1.jpg";
const Card = () => {
  return (
    <>
      <div className='text-left p-5 border rounded-lg space-y-4'>
        <img src={img1} alt='' className='w-80 h-52 rounded-lg' />
        <p className='text-xl font-bold text-gray-700'>Electrical System</p>
        <div className='text-lg font-semibold text-red-600 flex items-center justify-between'>
          <p className=''>Price : $20.00</p>
          <BsArrowRight />
        </div>
      </div>
    </>
  );
};

export default Card;
