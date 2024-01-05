import React from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {

  const [nav, setNav] = useState(false)
  console.log(nav)

  const linksArray = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Skills",
    },
    {
      id: 4,
      title: "Projects",
    },

    {
      id: 5,
      title: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center bg-black px-4 text-white h-20 w-full fixed">
      <div className="text-4xl ml-2">
        <h1>Shyam</h1>
      </div>

      <ul className="hidden md:flex">
        {/* for small it is hidden and for medium screen it is shown with flex 
        array map so that we do not have to copy one link again and again 
        */}
        {linksArray.map(({ id, title }) => (    
           <li key = {id} className="px-4 cursor-pointer text-gray-500 hover:scale-150 duration-200">
            {title}
          </li>))}
      </ul>


      <div
      onClick={()=>setNav(!nav)}
       className="cursor-pointer md:hidden">
          {!nav? <FaBars /> :<FaTimes/>}
      </div>

      {nav && 
      <ul className=" mt-20  flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400 ">
        {linksArray.map(({ id, title }) => (    
           <li key = {id} className="px-4 cursor-pointer py-6 text-4xl">
            {title}
          </li>))}
      </ul>}

    </div>
  );
};

export default Navbar;
