import React from 'react';
import '../../cssss/ContentComponent.css';
import '../../cssss/utility.css'
import { Link } from 'react-router-dom';
import watsapp from "../../assets/resources/img/Vector.png"
import "../../cssss/Responsive.css"

const ContentComponent = () => {
  return (
    <div id="content" className="flex flex-col items-center justify-center w-full h-screen   mt-[7vw]">
      <h1 className="text-center capitalize font-thin">
        Join India's largest <span className="text-green font-normal">community</span> of college students.
      </h1>
      <div className="watsapp mt-5 button btn flex items-center justify-center gap-25  md:[40vw] h-16 cursor-pointer">
        <img src={watsapp} alt="" />
        <Link
          to={"/"}
        >
           <h2 className=" font-uxumRegular text-[1.3vw] font-light">Join our WhatsApp community</h2>
        </Link>
       
      </div>
    </div>
  );
};

export default ContentComponent;
