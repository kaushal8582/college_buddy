import React from 'react';
import '../../cssss/utility.css';
import '../../cssss/AboutComponent.css';
import youtubeImg from "../../assets/resources/img/YOUTUBE WINDOW.png"
import "../../cssss/Responsive.css"

const AboutComponent = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center bg-gray-100 w-full py-24">
      <h1 className="text-64px font-thin">
        Who we <span className="text-green-500 font-normal">are</span> and what we <span className="text-green-500 font-normal">do?</span>
      </h1>
      <img src={youtubeImg} alt="YouTube Window" />
    </section>
  );
};

export default AboutComponent;
