import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Card = ({ _id, title, img, price }) => {
  return (
    <>
      <div className='text-left p-5 border rounded-lg space-y-4'>
        <img src={img} alt='' className='w-80 h-52 rounded-lg' />
        <p className='text-xl font-bold text-gray-700'>{title}</p>
        <div className='text-lg font-semibold text-red-600 flex items-center justify-between'>
          <p className=''>Price : ${price}</p>
          <Link to={`/services/${_id}`}>
            <BsArrowRight className='text-2xl hover:stroke-1 mr-1 cursor-pointer duration-200 ' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
