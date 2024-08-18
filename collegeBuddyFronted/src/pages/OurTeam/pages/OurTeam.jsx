import React, { useEffect } from "react";
import Background from "../../../components/homepageBackgroundAnimation/Background";
import OurTeamCard from "../component/OurTeamCard";
import { Link } from "react-router-dom";

import { useContext } from "react";
import myContext from "../../../components/context/myContext";

const OurTeam = () => {
  const context = useContext(myContext);
  const { getAllTeam } = context;

  return (
    <div className="w-full min-h-screen bg-white">
      <Background />
      <div className="w-full min-h-screen flex items-center justify-center flex-col">
        <h1 className="text-[70px] leading-6 max-md-xs:text-[40px]">
          We’re a team of
        </h1>
        <h1 className="text-[70px] max-md-xs:text-[50px] text-[#79B058] ">
          Creative Minds
        </h1>
        <p className="w-[450px] text-center max-md-xs:w-[350px]  ">
          We’re a passionate and dedicated team committed to empowering students
          to excel in their academics and build successful careers.
        </p>
        <div className="flex max-md-xs:flex-col items-center justify-center max-md-xs:mt-5 gap-7 mt-11">
          <button className="bg-[#79B058] font-semibold text-white rounded-md px-[18px] py-[7px] text-[20px] ">
            Join Our Team
          </button>
          <button className=" border-2 border-black  font-semibold text-black rounded-md px-[18px] py-[7px] text-[20px] ">
            Meet the Team
          </button>
        </div>
      </div>

      <div className="bg-[#ECECEC] w-full min-h-screen">
        <h1 className="text-5xl pt-[100px] text-center">
          Meet Our <span className="text-[#79B058]  ">Team</span>
        </h1>

        <div className=" mt-9 flex items-start justify-center gap-5 flex-wrap w-full min-h-screen pb-10">
          {getAllTeam?.length > 0 ? (
            getAllTeam?.map((item) => (
              <OurTeamCard
                github={item.github}
                img={item.profilePic}
                insta={item.instagram}
                linkdin={item.linkedin}
                name={item.name}
                portfolio={item.portfolio}
                role={item.role}
                summary={item.summary}
                key={item._id}
              />
            ))
          ) : (
            <p>Not have any team</p>
          )}
        </div>

        <div className="w-full flex items-center justify-center bg-white p-[80px] max-md-xs:p-5 ">
          <div className="bg-[#78b0582b] w-full rounded-lg h-[330px] flex items-center justify-center flex-col gap-8 max-md-xs:gap-5 ">
            <h1 className="text-7xl max-md-xs:text-4xl ">
              We are <span className="text-[#79B058]">hiring</span>...
            </h1>
            <p className="text-2xl font-normal max-md-xs:text-[20px] max-md-xs:w-[300px] text-center ">
              We're always looking for{" "}
              <span className="text-[#79B058]">great</span> peoples to join us.
            </p>
            <Link>
              <button className="bg-[#79B058] font-semibold text-white rounded-md px-[18px] py-[7px] text-[20px] ">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
