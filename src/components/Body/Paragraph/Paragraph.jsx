import React from "react";
import "./Paragraph.css";

const Paragraph = () => {
  return (
    <>
      <div className="services p-1 m-2">
        <h1 className="font-bold text-3xl text-blue-500 my-2 mx-1 p-2">Services</h1>
        <div className="service-box flex mt-2 mx-1 justify-center gap-4 h-[30vw] w-full">
          <div className="diet gap-3 bg-blue-500 w-[24%] h-60 flex flex-col items-center justify-center rounded-xl">
          <span className="font-bold text-white text-2xl">Diet Planner</span>
          <i class="fa-solid fa-bowl-food text-white text-6xl"></i>
          </div>
          <div className="posture bg-blue-500 w-[24%] h-60 flex flex-col gap-3 items-center justify-center rounded-xl">
          <span className="font-bold text-white text-2xl">Posture Correcter</span>
          <i class="fa-solid fa-person  text-white text-6xl"></i>
          </div>
          <div className="injury gap-3 bg-blue-500 w-[24%] h-60 flex flex-col items-center justify-center rounded-xl">
          <span className="font-bold text-white text-2xl">Injury And Risk Manager</span>
          <i class="fa-solid fa-user-injured  text-white text-6xl"></i>
          </div>
          <div className=" exercise posture bg-blue-500 w-[24%] h-60 flex flex-col gap-3 items-center justify-center rounded-xl">
          <span className="font-bold text-white text-2xl">Exercise Reminder</span>
          <i class="fa-solid fa-person-walking text-white text-6xl"></i>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Paragraph;
