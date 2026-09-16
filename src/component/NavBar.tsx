import { useState } from "react";
import logo from "../logo-text.png";

const NavBar = () => {
  const [mop, setMop] = useState(false);

  return (
    <nav className=" bg-white  border-gray-100 sticky top-0 z-50 ">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 container mx-auto">
        <button className="text-2xl md:hidden text-gray-700 hover:text-[#DB2777] cursor-pointer focus:outline-0 order-1 md:order-0"
          onClick={() => setMop(!mop)}
        >
          {mop ? "☰" : "☰"}
        </button>

        <img src={logo} alt="" className="h-8 w-auto cursor-pointer order-2 md:order-0" 
        />

        <ul className="hidden md:flex gap-6 items-center">
          <li className="text-[#DB2777] font-semibold text-sm cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer transition-colors">Technologies</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer transition-colors">Projects</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer transition-colors">About</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer transition-colors">Contact</li>
        </ul>

        <ul className="flex items-center gap-1 sm:gap-3 order-3 md:order-0">
          <li className="text-gray-700 hover:text-[#DB2777] text-xs sm:text-sm px-2 sm:px-3 py-2 cursor-pointer transition-colors">
            Sign in
          </li>
          <li className="bg-[#DB2777] hover:bg-[#e63e84] text-white font-medium text-xs sm:text-sm px-3 sm:px-5 py-2 rounded-full transition-colors cursor-pointer">
            Sign Up
          </li>
        </ul>
      </div>

      {mop && (
        <ul className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-3 shadow-md">
          <li className="text-[#DB2777] font-semibold text-sm cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer">Technologies</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer">Projects</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer">About</li>
          <li className="text-gray-700 hover:text-[#DB2777] text-sm cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;