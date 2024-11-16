import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

function Footer() {
  return (
    <div className="bg-black w-full h-auto mt-20 px-4 py-10">
      {/* Logo and Subscription Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        <Link to="/">
          <img
            className="w-[200px] h-[100px] mb-6 md:mb-0"
            src="https://www.hormuud.com/Svg/Hormuud.svg"
            alt="Logo"
          />
        </Link>
        
        <div className="mt-5 text-center md:text-left">
          <h1 className="font-bold text-white text-xl">Subscribe To Our Newsletter</h1>
          <p className="text-white">Get all the latest information, Sales, and Offers.</p>
        </div>
        
        {/* Input and Button Section */}
        <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-0 items-center">
          <input
            className="px-4 py-2 bg-[#2C2C2C] text-white rounded mb-3 md:mb-0 w-full md:w-auto"
            type="text"
            placeholder="Enter your email here..."
          />
          <button className="px-8 py-2 bg-[#00A550] text-white rounded flex items-center">
            Subscribe
            <AiOutlineArrowRight className="ml-2 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
