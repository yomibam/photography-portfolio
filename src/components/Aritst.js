import React from "react";
import artistImg from "../assets/artist.png";

export default function Aritst() {
  return (
    <div className="flex flex-col items-center text-left bg-gradient-to-b from-secondary via-secondary to-primary px-[50px] pt-[80px] pb-[150px] gap-[50px] lap:flex-row lap:items-start justify-center lap:px-[300px] lap:gap-[100px]">
      <div className="w-[300px] h-[auto] overflow-hidden lap:w-[500px]">
        <img
          src={artistImg}
          alt="artist"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[20px] lap:py-[50px]">
        <span className="w-full font-bold text-tertiary text-[20px]">
          About the Artist
        </span>
        <span className="w-full text-white font-bold text-[24px]">
          John Doe
        </span>
        <p className="w-full text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          venenatis posuere ante
        </p>
      </div>
    </div>
  );
}
