import { BsArrowRight } from "react-icons/bs";
const Card = ({ title, img, price }) => {
  return (
    <>
      <div className='text-left p-5 border rounded-lg space-y-4'>
        <img src={img} alt='' className='w-80 h-52 rounded-lg' />
        <p className='text-xl font-bold text-gray-700'>{title}</p>
        <div className='text-lg font-semibold text-red-600 flex items-center justify-between'>
          <p className=''>Price : ${price}</p>
          <BsArrowRight />
        </div>
      </div>
    </>
  );
};

export default Card;
