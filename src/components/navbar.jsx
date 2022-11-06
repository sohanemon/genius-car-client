import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAuth } from "../contexts/auth-provider";
import SecondaryBtn from "./secondaryBtn";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
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
          <span className='cursor-pointer relative group'>
            <AiOutlineUser />
            <span className='text-sm absolute hidden group-hover:block w-max right-0'>
              {user?.uid ? (
                <div className='flex gap-2'>
                  <p> {user?.displayName}</p>
                  <FiLogOut
                    onClick={() => logOut()}
                    className='text-red-500 text-xl'
                    title='logout'
                  />
                </div>
              ) : (
                <div onClick={() => navigate("/login")}>
                  <SecondaryBtn>Login</SecondaryBtn>
                </div>
              )}
            </span>
          </span>
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
