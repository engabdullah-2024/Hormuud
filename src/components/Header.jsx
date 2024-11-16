import { useState } from "react";
import { FaBars, FaTimes, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu
  const [cartCount, setCartCount] = useState(0); // State for tracking cart items

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <div className="bg-white bg-opacity-60 backdrop-blur-md shadow z-10 flex justify-between w-full px-6 py-6 items-center">
      {/* Logo on the left with adjusted size */}
      <Link to="/">
        <img
          className="w-[150px] h-[60px] md:w-[200px] md:h-[100px]" // Adjusted size for logo
          src="https://www.hormuud.com/Svg/Hormuud.svg"
          alt="Logo"
        />
      </Link>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-[#00A550]" />
          ) : (
            <FaBars className="text-2xl text-[#00A550]" />
          )}
        </button>
      </div>

      {/* List of Menu Items */}
      <ul className={`sm:flex gap-8 ${menuOpen ? "block" : "hidden"} absolute sm:static top-[70px] left-0 bg-white sm:bg-transparent w-full sm:w-auto`}>
        <li className="text-[#00A550] py-2 px-4">Home</li>
        <li className="py-2 px-4">Personal</li>
        <li className="py-2 px-4">Business</li>
        <li className="py-2 px-4">Who We Are</li>
        <li className="py-2 px-4">Media</li>
        <li className="py-2 px-4">Contact Us</li>
      </ul>

      {/* Love and Cart Icons (visible only if menu is open) */}
      <div className={`flex items-center gap-8 ${menuOpen ? "block" : "hidden"} sm:flex`}>
        {/* Love Icon with border and background */}
        <div className="relative border-2 border-[#00A550] p-2 rounded-full bg-[#f0fdf4]">
          <FaHeart className="text-[#00A550] text-2xl" />
        </div>

        {/* Cart Icon with badge, border, and background */}
        <div className="relative border-2 border-[#00A550] p-2 rounded-full bg-[#f0fdf4]">
          <FaShoppingCart className="text-[#00A550] text-2xl" />
          <span className="absolute top-[-10px] right-[-10px] bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
