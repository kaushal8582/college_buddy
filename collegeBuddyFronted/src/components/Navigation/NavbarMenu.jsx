import React from 'react';
import closeIcon from "../../assets/resources/svgs/hamburger-cross-icon.svg";
import { Link } from 'react-router-dom';

const NavbarMenu = ({ closeMenu }) => {
  return (
    <div
      id="navbarMenuFirst"
      className="fixed max-md-xs:visible max-md-xs:z-50 pt-12 z-40 top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-lg backdrop-saturate-180 min-h-screen  flex items-start justify-between flex-col  p-4 transform transition-transform duration-300 ease-in-out"
    >
      <div className="nav-top flex w-full flex-col justify-start items-center mb-4">
        <div className="cross flex items-center w-full justify-between pr-8">
          <h2 className="text-2xl font-bold">MENU</h2>
          <img
            id="hamburger-close-icon"
            src={closeIcon}
            alt="Close"
            className="ml-4 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <div className="links-navbarmenu flex space-x-6 flex-col items-center justify-start mt-5 w-full">
          <Link to={"/"} className='w-full' ><li className="list-none cursor-pointer hover:text-gray-300 pl-3">Home</li></Link>
          <Link to={"/pyq"} className='w-full' ><li className="list-none cursor-pointer hover:text-gray-300">PYQ</li></Link>
         <Link to={"/ebooks"} className='w-full' > <li className="list-none cursor-pointer hover:text-gray-300">Ebook</li></Link>
        </div>
      </div>
     
        <Link className='w-full' to={"/login"} >
        <li className=" navbarsign  sign hoverbtn button w-full flex align-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Sign In
        </li>
        </Link>
     
    </div>
  );
};

export default NavbarMenu;
