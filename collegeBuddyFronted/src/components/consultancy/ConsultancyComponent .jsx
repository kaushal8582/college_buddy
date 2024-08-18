import React from 'react';
import '../../cssss/ConsultancyComponent.css';
import '../../cssss/utility.css'
import callImg from "../../assets/resources/img/call.png"
import watsappImg from "../../assets/resources/img/Vector.png"
import artWorkSvg from "../../assets/resources/svgs/consultency-artwork.svg"
import "../../cssss/Responsive.css"

const ConsultancyComponent = () => {
  return (
    <section id="constulalcy" className="p-25 w-full">
      <div className="cons-card flex items-center justify-center border-5 border-[#79B058] rounded-20 h-[596px]">
        <div className="leftConstulalcy p-12 w-3/5">
          <h1 className="text-60px font-light">
            Unsure about your <span className="text-green-500 font-normal">future?</span> Let our <span className="text-green-500 font-normal">experts</span> guide you.
          </h1>
          <p className="mt-12 w-[569px] text-1.5vw font-light">
            Discover the right field for your graduation based on your interests and strengths. Get personalized advice for <b>FREE</b> Need any help? <br />
            <span className="text-green-500 font-normal">You can contact us anytime!</span>
          </p>
          <div className="buttons flex items-center mt-14 gap-6">
            <button className="button hoverbtn w-[291px] text-24px capitalize font-normal">
              send a message <img src={watsappImg} alt="" />
            </button>
            <button className="button w-[247px] text-black bg-transparent border-3 border-black text-24px capitalize font-normal">
              talk on call <img src={callImg} alt="" />
            </button>
          </div>
        </div>
        <div className="rightConstulalcy w-2/5 h-full relative overflow-hidden">
          <img className="con-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={artWorkSvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ConsultancyComponent;
