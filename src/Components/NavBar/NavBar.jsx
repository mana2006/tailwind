import { IoSunnySharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";
import { FaMoon } from "react-icons/fa";

const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <nav className="flex ">
      <div className="flex items-center">
        <div className="text-20 font-bold">NerbCard</div>
        {!isDarkMode ? (
          <FaMoon
            size={"24px"}
            className="mx-3 cursor-pointer"
            color={"#e9c46a"}
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <IoSunnySharp
            size={"24px"}
            color={"#e9c46a"}
            className="mx-3 cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex gap-10 items-center ml-auto text-16 font-semibold cursor-pointer">
        {openMenu && isMobile ? (
          <BiX size={"30px"} className="cursor-pointer" onClick={handleMenu} />
        ) : (
          isMobile && (
            <IoIosMenu
              size={"30px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          )
        )}
        {!isMobile ? (
          <>
            <li className="hover-menu-li">Features</li>
            <li className="hover-menu-li">Menu</li>
            <li className="hover-menu-li">Our Story</li>
            <li className="hover-menu-li pr-6 ml-28">Contact</li>
          </>
        ) : (
          openMenu &&
          isMobile && (
            <div className="absolute right-16 top-10 p-4 bg-purple-200">
              <li className="cursor-pointer p-1 hover:bg-sky-700">Features</li>
              <li className="cursor-pointer p-1">Menu</li>
              <li className="cursor-pointer p-1">Our Story</li>
              <li className="cursor-pointer p-1">Contact</li>
            </div>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
