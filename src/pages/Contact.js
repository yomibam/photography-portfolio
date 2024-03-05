import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import menuIcon from "../assets/Menu.png";

export default function Contact() {
  return (
    <div>
      <div className="flex items-center justify-between px-[10%] py-[10%] lap:py-[5%] bg-primary">
        <Link to="/" className="text-white">
          iSHOT
        </Link>
        <div className="hidden lap:flex lap:gap-[30px] lap:text-white">
          <Link to="/fashion">FASHION</Link>
          <Link to="/wedding">WEDDING</Link>
          <Link to="/retouching">RETOUCHING</Link>
        </div>
        <Link to="/contact" className="hidden lap:block lap:text-white">
          CONTACT
        </Link>
        <img
          src={menuIcon}
          alt="menu"
          className="w-[25px] h-[25px] lap:hidden"
        />
      </div>
      <div className="flex flex-col items-center w-full bg-secondary py-[70px] gap-[30px]">
        <span className="text-white lap:text-[24px] lap:py-[50px]">
          CONTACT ME
        </span>
        <dvi className="flex flex-col gap-[50px] w-full lap:flex-row lap:items-center lap:justify-center lap:px-[70px] lap:gap-0">
          <form className="flex flex-col px-[35px] py-[10px] gap-[20px] lap:w-full">
            <input
              className="pl-[10px] py-[10px] bg-secondary border text-white"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="pl-[10px] py-[10px] bg-secondary border text-white"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="pl-[10px] py-[10px] bg-secondary border text-white"
              type="tel"
              name="phone"
              placeholder="Phone"
              required
            />
            <textarea
              className="pl-[10px] pt-[10px] py-[100px] bg-secondary border text-white"
              name="message"
              placeholder="Message"
              required
            />
            <div className="flex justify-center lap:justify-start">
              <button className="outline outline-2 outline-offset-2 outline-primary text-white text-[16px] px-[15px] py-[5px]">
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col text-center text-white gap-[20px] lap:w-full lap:gap-[30px]">
            <div>
              <h3 className="font-bold text-[20px]">Email</h3>
              <p>trndsta@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-[20px]">Phone no</h3>
              <p>+234 806 930 7341</p>
            </div>
            <div>
              <h3 className="font-bold text-[20px]">Address</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </dvi>
      </div>
      <Footer />
    </div>
  );
}
