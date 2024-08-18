import React from 'react';
import '../../cssss/OurResourceComponent.css';
import "../../cssss/utility.css"
import bookMockup from "../../assets/resources/img/book-mockup 1.png"
import "../../cssss/Responsive.css"

const OurResourceComponent = () => {
  return (
    <section id="ourResource" className="flex items-center justify-center p-22 gap-8">
      <img src={bookMockup} alt="Book Mockup" />
      <div className="resourceContent flex flex-col items-start justify-center ">
        <h1 className="text-60px font-light">
          Unlock Free Study Resources to <br />
          <span className="text-green-500 font-normal">Boost Your Learning.</span>
        </h1>
        <button className="button hoverbtn w-[323px] border-none text-24px capitalize mt-12 font-normal">
          Unlock free resource
        </button>
      </div>
    </section>
  );
};

export default OurResourceComponent;
