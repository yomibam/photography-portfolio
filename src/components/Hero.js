import React from "react";
import arrowRight from "../assets/arrow-right.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-[150px] gap-[30px] lap:items-start lap:px-[200px] lap:py-[100px] lap:gap-[0px]">
      <span className="font-sans text-[20px] text-white lap:text-[24px]">
        John Doe
      </span>
      <div className="flex flex-col items-center gap-0 lap:items-start">
        <span className="font-serif text-[40px] text-white lap:text-[96px]">
          Fashion
        </span>
        <span className="font-sans text-[40px] text-white lap:text-[96px]">
          Photography
        </span>
      </div>

      <div className=" flex items-center outline  outline-2 outline-white gap-[20px] pl-[20px] text-white lap:pl-[40px] lap:gap-[40px]">
        OUR OFFER
        <div className="bg-white px-[15px] py-[15px]">
          <img
            src={arrowRight}
            alt="arrow right"
            className="w-[15px] h-[12px] "
          />
        </div>
      </div>
    </div>
  );
}
