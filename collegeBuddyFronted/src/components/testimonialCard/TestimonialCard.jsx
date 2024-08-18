import React from 'react';
import quote from "../../assets/resources/img/quotes.png"
import graduationCap from "../../assets/resources/img/GRADUATION CAP.png"
import "../../cssss/Responsive.css"

const TestimonialCard = ({content,name,year,img}) => {
  return (
    <div className="fcard min-w-[500px] min-h-[500px] rounded-[25px] border-[5px] border-[#79B058] p-[50px] relative overflow-hidden bg-white font-light">
      <img src={quote} alt="" />
      <p className="mt-[20px] text-[20px] leading-[2vw] font-light">
        {content}
      </p>
      <div className="person flex items-center gap-[20px] mt-[80px]">
        <div className="perImg relative w-[70px] h-[70px] rounded-full p-[2px] border-[2px] border-[#79B058]">
          <img src={img} alt="" className="w-full h-full object-cover" />
          <img src={graduationCap} alt="" className="absolute top-[-20%] right-[-10%] h-6 " />
        </div>
        <div className="perdetails">
          <h3 className="font-light">{name}</h3>
          <h4 className="text-gray-500 font-light">{year}</h4>
        </div>
      </div>
      <div className="redcircle w-[300px] h-[300px] rounded-full absolute border-[2px] border-[#EFA83E] bottom-[-60%] right-[-60%] transform translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
};

export default TestimonialCard;
