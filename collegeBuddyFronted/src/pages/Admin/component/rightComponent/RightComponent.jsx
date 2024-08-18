import React from "react";
import ebookSvg from "../../../../assets/resources/svgs/ebook2.svg";
import pyq from "../../../../assets/resources/svgs/pyq.svg";
import studym from "../../../../assets/resources/svgs/studym.svg";
import toast from "react-hot-toast";

const RightComponent = ({ setSelectedSection }) => {
  const dwonloadUserData = async () => {
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
  
      const response = await fetch(
        "http://localhost:3000/collegebuddy/api/v1/users/export-usrdata",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "users.xlsx"; // Name of the downloaded file
        document.body.appendChild(a);
        a.click();
        a.remove();
        toast.success("Data downloaded successfully");
      } else {
        toast.error("Downloading data failed");
      }
    } catch (error) {
      toast.error("Downloading failed");
      console.log(error);
    }
  };
  

  return (
    <div className=" border-2 w-full h-full px-12 max-lg-xs:px-1 overflow-scroll lg:overflow-x-hidden py-24 max-lg-xs:py-5 max-lg-xs:items-center max-lg-xs bg-white shadow-xl flex flex-col max-lg-xs:flex-row items-start gap-7  text-2xl font-semibold  justify-start ">
      <li
        onClick={dwonloadUserData}
        className="list-none  cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={ebookSvg} alt="" className="h-8" />
        Download user Data
      </li>
      <li
        onClick={() => setSelectedSection("ebook")}
        className="list-none  cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={ebookSvg} alt="" className="h-8" />
        Ebooks
      </li>
      <li
        onClick={() => setSelectedSection("pyq")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={pyq} alt="" className="h-8" />
        PYQ
      </li>
      <li
        onClick={() => setSelectedSection("studymaterial")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={studym} alt="" className="h-8" />
        Study Materail
      </li>
      <li
        onClick={() => setSelectedSection("addUniversity")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={studym} alt="" className="h-8" />
        Add University
      </li>
      <li
        onClick={() => setSelectedSection("addCourse")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={studym} alt="" className="h-8" />
        Add Course
      </li>
      <li
        onClick={() => setSelectedSection("addvideo")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={studym} alt="" className="h-8" />
        Add Video
      </li>
      <li
        onClick={() => setSelectedSection("team")}
        className="list-none cursor-pointer hover:underline hover:text-blue-700 flex items-center justify-start gap-3 min-w-[150px]  "
      >
        <img src={studym} alt="" className="h-8" />
        Add Team
      </li>
    </div>
  );
};

export default RightComponent;
