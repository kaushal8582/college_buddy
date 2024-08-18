import React from "react";
import ebook from "../../assets/resources/svgs/ebook2.svg";
import home from "../../assets/resources/svgs/home.svg";
import pyq from "../../assets/resources/svgs/pyqb.svg";
import studymat from "../../assets/resources/svgs/studymat.svg";
import videosvg from "../../assets/resources/svgs/video.svg";
import { Link } from "react-router-dom";

const Bootom = () => {
  return (
    <div className=" fixed bottom-0 left-0 max-md-xs:flex hidden max-md-xs:w-[100%] px-5 py-3  items-center justify-between z-40 w-full h-[60px] bg-[#79B058] shadow-2xl shadow-black ">
      <Link to={"/"}>
        <div className=" cursor-pointer flex flex-col items-center justify-center">
          <img className="h-7" src={home} alt="" />
          <h3 className="text-white text-[15px] font-semibold">Home</h3>
        </div>
      </Link>
      <Link to={"/pyq"}>
        <div className=" cursor-pointer flex flex-col items-center justify-center">
          <img className="h-7" src={pyq} alt="" />
          <h3 className="text-white text-[15px] font-semibold">PYQ</h3>
        </div>
      </Link>
      <Link to={"/video"}>
        <div className=" cursor-pointer flex flex-col items-center justify-center">
          <img className="h-7" src={videosvg} alt="" />
          <h3 className="text-white text-[15px] font-semibold ">Videos</h3>
        </div>
      </Link>
      <Link to={"/study"}>
        <div className=" cursor-pointer flex flex-col items-center justify-center">
          <img className="h-7" src={studymat} alt="" />
          <h3 className="text-white text-[15px] font-semibold ">Study M</h3>
        </div>
      </Link>
      
      <Link to={"/ebooks"} >
        <div className=" cursor-pointer flex flex-col items-center justify-center">
          <img className="h-7" src={ebook} alt="" />
          <h3 className="text-white text-[15px] font-semibold ">Ebook</h3>
        </div>
      </Link>
    </div>
  );
};

export default Bootom;
