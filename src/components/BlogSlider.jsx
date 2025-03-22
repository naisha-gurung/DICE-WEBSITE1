import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.jpeg";

const blogs = [
  {
    id: 1,
    title: "National Science Day Presentation Competition",
    date: "February 28, 2024",
    content:
      "DICE organized a presentation competition on indigenous technologies, promoting innovation and scientific curiosity among students. 66 presentations showcased creative ideas, enhancing research skills and communication abilities.",
    imageUrl: blog1,
  },
  {
    id: 2,
    title: "Arduino and IoT Workshop",
    date: "February 3, 2024",
    content:
      "DICE organized a workshop focusing on Arduino and IoT, led by Dr. Rajneesh Talwar and Dr. Manvinder Sharma. Students gained hands-on experience in coding, implementing LED circuits, traffic lights, and more, fostering innovation in engineering.",
    imageUrl: blog2,
  },
  {
    id: 3,
    title: "DICE-SKOAR Gamers Arcade",
    date: "December 8-12, 2023",
    content:
      "Organized the 'DICE-SKOAR Gamers Arcade'. Over 500 students participated, experiencing AR/VR gaming, PS5, and laptop gaming. The event showcased how gaming technologies enhance learning and offered online gaming competitions with cash prizes.",
    imageUrl: blog3,
  },

  {
    id: 4,
    title: "International Conference",
    date: "Two-day event",
    content:
      "Dr. Rajneesh Talwar's project paper on 'E-Bike' was selected at the International Conference, organized by DST-Centre, Panjab University, RFRF, FPTU-Vietnam, NTU-UK, and CICU. The conference facilitated discussions on practical knowledge opportunities, and funding initiatives, aiming to foster innovation and collaboration between industry, and government bodies.",
    imageUrl: blog4,
  },
  {
    id: 5,
    title: "Expert Talk on Data Structures",
    date: "August 4, 2023",
    content:
      "DICE organized an Expert Talk on Data Structures at Plato Hall. Dr. Rajneesh Talwar introduced the session, followed by Dr. Sandeep Sachdeva's informative talk covering types, applications, time complexity, optimization, and live coding demonstrations.",
    imageUrl: blog5,
  },
];

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center my-10">
      <div className="flex sm:w-[90%]  justify-between overflow-hidden flex-wrap">
        {blogs.slice(currentIndex, currentIndex + 2).map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2 p-4 sm:p-2  lg:p-12">
            <div className="bg-white m-4 md:h-[500px] lg:h-[400px] shadow-md rounded-lg overflow-hidden duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-36 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold sm:text-xl">{blog.title}</h2>
                <h4 className="text-xs font-semibold sm:text-md">
                  {blog.date}
                </h4>
                <p className="text-gray-700 text-sm mt-2 sm:text-[15px]">
                  {blog.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
        onClick={handlePrev}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
        onClick={handleNext}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default BlogSlider;
