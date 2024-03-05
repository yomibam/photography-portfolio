import React from "react";
import camera from "../assets/Camera_fill.png";
import retouch from "../assets/Edit_fill.png";
import training from "../assets/Book_check_fill.png";

export default function WhatWeDo() {
  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-secondary px-[50px] py-[80px] flex flex-col items-start gap-[50px] lap:px-[300px] lap:py-[100px]">
      <span className="text-white text-[20px]">What we do</span>
      <p className="text-white text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        venenatis posuere ante
      </p>

      <div className="flex flex-col gap-[30px] lap:flex-row">
        <div>
          <img src={camera} alt="photography" className="w-[40px] h-[40px]" />
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque venenatis posuere ante
          </p>
        </div>
        <div>
          <img src={retouch} alt="retouch" className="w-[40px] h-[40px]" />
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque venenatis posuere ante
          </p>
        </div>
        <div>
          <img src={training} alt="training" className="w-[40px] h-[40px]" />
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque venenatis posuere ante
          </p>
        </div>
      </div>

      <button className="outline outline-2 outline-offset-2 outline-primary text-white text-[16px] px-[15px] py-[5px]">
        Learn more
      </button>
    </div>
  );
}
