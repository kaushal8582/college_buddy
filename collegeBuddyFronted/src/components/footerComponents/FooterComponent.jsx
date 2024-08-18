import React from 'react';
import discordSvg from "../../assets/resources/svgs/discord_logo.svg"
import instagramSvg from "../../assets/resources/svgs/instagram_logo.svg"
import linkdinSvg from "../../assets/resources/svgs/linkdin_logo.svg"
import xSvg from "../../assets/resources/svgs/x_logo.svg"
import youtubeSvg from "../../assets/resources/svgs/youtube_logo.svg"
import collegeBuddyLogo from "../../assets/resources/svgs/college-buddy-logo-01.svg"
import "../../cssss/utility.css"

const FooterComponent = () => {
  return (
    <section id="footer" className="w-full h-[550px] p-[50px_80px]">
      <div className="footer-content w-full h-[400px] border-b-2 border-t-2 border-black pt-[50px] flex justify-between items-start">
        <div className="fsec1 flex flex-col justify-start items-start gap-[25px]">
          <img src={collegeBuddyLogo} alt="" className="h-[70px]" />
          <p>Let’s connect with our socials</p>
          <div className="social-links flex items-center justify-center gap-[10px]">
            <a href=""> <img src= {discordSvg} alt="" className="w-[40px] h-[40px]" /> </a>
            <a href=""><img src= {instagramSvg}  alt="" className="w-[40px] h-[40px]" /></a>
            <a href=""><img src= {linkdinSvg} alt="" className="w-[40px] h-[40px]" /></a>
            <a href=""><img src={xSvg} alt="" className="w-[40px] h-[40px]" /></a>
            <a href=""><img src= {youtubeSvg} alt="" className="w-[40px] h-[40px]" /></a>
          </div>
        </div>
        <div className="fsec2 flex flex-col justify-start items-start gap-[25px]">
          <h2 className="uppercase font-semibold">Company</h2>
          <ol className="flex flex-col justify-start items-start gap-[25px]">
            <li className="relative cursor-pointer capitalize">About us</li>
            <li className="relative cursor-pointer capitalize">our team</li>
            <li className="relative cursor-pointer capitalize">privacy policy</li>
            <li className="relative cursor-pointer capitalize">terms & conditions</li>
          </ol>
        </div>
        <div className="fsec3 flex flex-col justify-start items-start gap-[25px]">
          <h2 className="uppercase font-semibold">community</h2>
          <ol className="flex flex-col justify-start items-start gap-[25px]">
            <li className="relative cursor-pointer capitalize">WhatsApp</li>
            <li className="relative cursor-pointer capitalize">discord</li>
          </ol>
        </div>
        <div className="fsec4 flex flex-col justify-start items-start gap-[25px]">
          <h2 className="uppercase font-semibold">get in touch</h2>
          <ol className="flex flex-col justify-start items-start gap-[25px]">
            <li className="relative cursor-pointer capitalize">+91 98019 07094</li>
            <li className="relative cursor-pointer capitalize">+91 70615 06562</li>
            <li className="relative cursor-pointer lowercase">collegebuddy.in@gmail.com</li>
            <li className="relative cursor-pointer capitalize">
              Hajipur, Vaishali (Bihar), 844102
            </li>
          </ol>
        </div>
      </div>
      <h3 className="mt-[50px] text-center text-[16px] text-gray-500">© 2024 COLLEGE BUDDY. All rights reserved.</h3>
    </section>
  );
};

export default FooterComponent;
