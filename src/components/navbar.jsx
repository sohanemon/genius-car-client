import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BsHandbag, BsSearch } from "react-icons/bs";
import SecondaryBtn from "./secondaryBtn";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-10'>
      <img className='w-20' src={logo} alt='' />
      <ul className='flex text-gray-700 capitalize space-x-7'>
        {navItems.map((el) => (
          <Link to={el} key={el} className='hover:text-black'>
            {el}
          </Link>
        ))}
      </ul>
      <div className='flex gap-8 items-center'>
        <div className='text-xl space-x-5 flex'>
          <BsHandbag />
          <BsSearch />
        </div>
        <SecondaryBtn>Appointment</SecondaryBtn>
      </div>
    </div>
  );
};

export default Navbar;
const navItems = ["home", "about", "services", "blogs", "contact"];
