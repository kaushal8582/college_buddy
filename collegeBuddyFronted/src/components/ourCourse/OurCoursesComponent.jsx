import React from 'react';
import '../../cssss/utility.css';
import '../../cssss/OurCoursesComponent.css';
import courseVideo from "../../assets/resources/video/college-buddy-logo-animtion.mp4"
import "../../cssss/Responsive.css"

const OurCoursesComponent = () => {
  return (
    <section id="ourCources" className="flex items-center p-36">
      <div id="courcleft" className="flex flex-col items-start justify-center w-1/2 gap-12">
        <h1 className="text-64px font-thin">
          Boost Your Academics and Excel in Your Career with <span className="text-green-500 font-normal">Our Courses</span>
        </h1>
        <a href="" className="no-underline">
          <button className="button hoverbtn w-374px border-none text-24px capitalize font-normal">
            Start Your Success Journey
          </button>
        </a>
      </div>
      <div id="courcright" className="flex items-center justify-center w-1/2 relative gap-4 h-full">
        <video
          className="logovideoanimated "
          src={courseVideo}
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
};

export default OurCoursesComponent;
