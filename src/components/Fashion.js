import React from "react";
import FashionData from "../data/FashionData";

export default function Fashion() {
  const topImages = FashionData.slice(0, 3);

  const handleGallery = () => {
    return topImages.map((img) => (
      <div
        key={img.id}
        className="w-[300px] h-[auto] overflow-hidden lap:max-w-full lap:pb-[15%]"
      >
        <img
          src={require(`../assets/${img.img_url}`)}
          alt="fashion"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center text-left bg-secondary  px-[50px] py-[80px] gap-[50px] lap:px-[300px] lap:py-[100px]">
      <span className="text-white text-[20px] w-full">Fashion</span>
      <p className="text-white text-[16px] w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        venenatis posuere ante
      </p>
      <div className="flex flex-col gap-[10px] lap:w-full lap:block lap:columns-2 lap:gap-[20px]">
        {handleGallery()}
      </div>
      <div className="w-full">
        <button className=" text-tertiary">See more</button>
      </div>
    </div>
  );
}
