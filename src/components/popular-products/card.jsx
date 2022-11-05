import { BsFillStarFill } from "react-icons/bs";
import img1 from "../../assets/images/products/1.png";
const Card = () => {
  return (
    <div className='p-5 border rounded-lg space-y-5'>
      <div className=' bg-gray-100 rounded-lg flex justify-center'>
        <img src={img1} alt='' className='w-40 h-40' />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='flex gap-[2px]'>
          {[...Array(5).keys()].map((el) => (
            <BsFillStarFill className='text-yellow-500 ' key={el} />
          ))}
        </span>
        <p className='text-xl font-bold text-center text-gray-700'>
          Car Engine Plug
        </p>
        <p className='text-lg font-semibold text-center text-red-600'>$20.00</p>
      </div>
    </div>
  );
};

export default Card;
