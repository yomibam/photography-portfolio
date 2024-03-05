import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import bgImg from "../assets/bg-img.jpg";

export default function Head() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Nav />
      <Hero />
    </div>
  );
}
