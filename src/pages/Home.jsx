import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaWifi, FaMobileAlt, FaMoneyBillAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function Home() {
  // Define an array of slides containing images and text
  const slides = [
    {
      image: "https://www.hormuud.com/_next/image?url=https%3A%2F%2Fhwapi.hormuud.com%2Fassets%2Fimages%2F%2Fanfac_offer.png&w=750&q=75",
      title: "STAY CONNECTED LONGER FOR LESS!",
      description: "Get More Data and Voice Calls. Don't Miss This Limited-Time Offer!"
    },
    {
      image: "https://www.hormuud.com/_next/image?url=https%3A%2F%2Fhwapi.hormuud.com%2Fassets%2Fimages%2F%2FKudhan_offer.png&w=750&q=75",
      title: "DON'T MISS OUT ON THE BEST PLAN AROUND!",
      description: "Get unlimited Mobile Internet and Voice Calls for 30 Days, all just $15!"
    },
    {
      image: "https://www.hormuud.com/_next/image?url=https%3A%2F%2Fhwapi.hormuud.com%2Fassets%2Fimages%2F%2FWeekly_offer.png&w=750&q=75",
      title: "DON'T MISS OUT ON THIS LIMITED-TIME OFFER!",
      description: "Enjoy unlimited 5G Internet and Voice Calls for just $3.5 a week!"
    }
  ];

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Use useEffect to automatically change the slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 py-6 gap-8">
        {/* Left-side */}
        <div className="mt-32 md:w-1/2 flex items-center relative">
          {/* Left arrow */}
          <AiOutlineArrowLeft
            className="text-[#00A550] text-4xl mr-2 hidden md:block absolute left-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={prevSlide}
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#00A550]">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl mt-5">
              {slides[currentIndex].description}
            </p>
            <button className="px-8 py-2 bg-[#00A550] text-white mt-5 rounded flex items-center">
              Get It Now
              <AiOutlineArrowRight className="ml-2 text-4xl" />
            </button>
          </div>
        </div>

        {/* Right-side image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex items-center justify-center relative">
          <div>
            <img
              className="w-full md:w-[600px] h-auto"
              src={slides[currentIndex].image}
              alt="Offer"
            />
          </div>
          <AiOutlineArrowRight
            className="text-[#00A550] text-4xl absolute right-[-30px] top-1/2 transform -translate-y-1/2 hidden md:block cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>

      <div className="services bg-white shadow-lg p-6 flex justify-center flex-wrap gap-6">
        {/* Service Cards with Fade-In Animation */}
        {[
          { icon: <FaWifi className="text-green-500 text-4xl mb-2" />, title: "Fiber Internet", description: "Broadband For Your Home and Office" },
          { icon: <FaMobileAlt className="text-green-500 text-4xl mb-2" />, title: "Mobile Internet", description: "The Cheapest Mobile Internet In Africa" },
          { icon: <FaMoneyBillAlt className="text-green-500 text-4xl mb-2" />, title: "EVC-Plus", description: "One Of Africa's Most Secure Mobile Money Transforms" }
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-50 shadow-md p-4 rounded-md max-w-xs"
            initial={{ opacity: 0, y: 50 }} // Start faded and below
            animate={{ opacity: 1, y: 0 }} // End fully visible and at the original position
            transition={{ duration: 0.8, delay: index * 0.2 }} // Add a staggered delay for each card
          >
            {service.icon}
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
