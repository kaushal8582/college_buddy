import React from "react";
import { Link } from "react-router-dom";
import linkdin from "../../../assets/resources/svgs/linkdin_logo.svg";
import insta from "../../../assets/resources/svgs/instagram_logo.svg";

const OurTeamCard = ({img,name,role,summary,lin,inst,portfolio,github}) => {
  return (
    <div className="w-[296px] min-h-[417px] p-[20px] rounded-lg bg-white">
      <img
        className="w-[256px] h-[256px] rounded-md overflow-hidden  object-cover "
        src={img}
        alt=""
      />
      <h2 className="text-[20px] font-semibold  ">{name}</h2>
      <h2 className="text-[#1e1e1e7c] font-semibold leading-3 ">{role}</h2>
      <p className="text-[#1e1e1e7c] leading-4 mt-5">
        “{summary}”
      </p>

      <div className="flex mt-6 gap-3" >
        <Link to={`${lin}`} >
          <img src={linkdin} alt="" />
        </Link>
        <Link to={`${inst}}`} >
          <img src={insta} alt="" />
        </Link>
        <Link to={`${portfolio}`} >
          <img src={linkdin} alt="" />
        </Link>
        <Link to={`${github}`} >
          <img src={linkdin} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default OurTeamCard;
