import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/Twitter.png";
import behance from "../assets/Behance.png";
import instagram from "../assets/Instagram.png";
import whatsapp from "../assets/WhatsApp.png";
import youtube from "../assets/YouTube.png";

export default function Footer() {
  return (
    <div className="flex flex-col bg-primary py-[30px] gap-[60px] px-[40px] lap:flex-row lap:px-[100px] lap:py-[150px] lap:justify-center lap:gap-[200px]">
      <Link to="/" className="text-white">
        iSHOT
      </Link>
      <div className="flex justify-center gap-[80px] lap:gap-[200px]">
        <div className="flex flex-col gap-[25px]">
          <Link to="/fashion" className="text-white">
            Fashion
          </Link>
          <Link to="/wedding" className="text-white">
            Wedding
          </Link>
          <Link to="/retouching" className="text-white">
            Retouching
          </Link>
        </div>
        <div className="flex flex-col gap-[25px]">
          <span className="text-white">Training</span>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] px-[30px]">
        <span className="text-white text-[20px]">Get in Touch</span>
        <div className="flex justify-between lap:gap-[10px]">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitter social"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://behance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={behance}
              alt="twitter social"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="twitter social"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtube}
              alt="twitter social"
              className="w-[34px] h-[34px]"
            />
          </a>
          <a
            href="https://whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="twitter social"
              className="w-[34px] h-[34px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
