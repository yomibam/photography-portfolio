import React from "react";
import Footer from "../components/Footer";
import WeddingData from "../data/WeddingData";
import Nav from "../components/Nav";
import bgImg from "../assets/bg-img.jpg";

export default function RetouchingPage() {
  const handleGallery = () => {
    return WeddingData.map((img, index) => (
      <div
        key={index}
        className="w-[300px] h-[auto] overflow-hidden lap:max-w-full lap:pb-[5%]"
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
    <div>
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Nav />
        <div className="pt-[100px] pb-[130px] flex justify-center">
          <span className=" text-white font-bold text-[32px]">Retouching</span>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] bg-secondary items-center py-[50px] lap:w-full lap:block lap:columns-4 lap:gap-[20px] lap:px-[100px]">
        {handleGallery()}
        <div className="w-full pl-[50px] pt-[50px]">
          <button className=" text-tertiary">See more</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
