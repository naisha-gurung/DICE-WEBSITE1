import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoTerminal } from "react-icons/io5";
import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import image2 from "../assets/image2.jpeg";

export default function OrgForYou() {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h1 className="text-4xl sm:text-5xl font-bold my-12">
        What for You...?
      </h1>

      <div className="w-[95%] flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="sm:w-1/2 h-[240px] border-2 m-4 p-4 rounded-xl duration-500 hover:scale-105">
              <div className="flex items-center p-3">
                <GrWorkshop className="text-5xl" />
              </div>
              <div className="mt-2">
                <h2 className="font-bold text-xl">Workshops</h2>
                <p>
                  By organizing regular workshops, we ensure that your journey
                  to becoming a skilled programmer is smooth and
                  straightforward.
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 h-[240px] border-2 m-4 p-4 rounded-xl duration-500 hover:scale-105">
              <div className="flex items-center p-3">
                <FaLaptopCode className="text-5xl" />
              </div>
              <div className="mt-2">
                <h2 className="font-bold text-xl">Codethons</h2>
                <p>
                  We host codathons for all to test coding limits, improve
                  skills, and advance careers in technology. Join us to enhance
                  your coding journey!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <div className="sm:w-1/2 h-[240px] border-2 m-4 p-4 rounded-xl duration-500 hover:scale-105">
              <div className="flex items-center p-3">
                <IoTerminal className="text-5xl" />
              </div>
              <div className="mt-2">
                <h2 className="font-bold text-xl">Hackathons</h2>
                <p>
                  A gathering for programmers and enthusiasts to create and
                  showcase software, receiving feedback from experienced
                  individuals.
                </p>
              </div>
            </div>
            <div className="sm:w-1/2 h-[240px] border-2 m-4 p-4 rounded-xl duration-500 hover:scale-105">
              <div className="flex items-center p-3">
                <FaChalkboardTeacher className="text-5xl" />
              </div>
              <div className="mt-2">
                <h2 className="font-bold text-xl">Seminars</h2>
                <p>
                  We organize seminars with industry experts to aid students in
                  workplace readiness and skill enhancement for professional
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={image2} alt="forU image" className="w-2/3 lg:w-2/5" />
      </div>
    </div>
  );
}
