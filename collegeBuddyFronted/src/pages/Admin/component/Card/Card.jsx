import React from "react";
import edit from "../../../../assets/resources/svgs/edit.svg";
import deletesvg from "../../../../assets/resources/svgs/delete.svg";
import { toast } from "react-hot-toast";

const Card = ({ img, id, type }) => {
  const handelDelete = async () => {
    const urlMap = {
      ebooks: `http://localhost:3000/collegebuddy/api/v1/ebooks/ebookdelete/${id}`,
      studymaterial: `http://localhost:3000/collegebuddy/api/v1/studymaterial/deletestudymaterial/${id}`,
      team: `http://localhost:3000/collegebuddy/api/v1/team/delete-member/${id}`,
      // Add more types here as needed
    };
  
    const url = urlMap[type];
  
    if (!url) {
      toast.error("Invalid type specified for deletion");
      return;
    }
  
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: "GET",
      });
  
      if (response.ok) {
        toast.success(
          `${type.charAt(0).toUpperCase() + type.slice(1)} delete successfully`
        );
      }
    } catch (error) {
      toast.error(`${type.charAt(0).toUpperCase() + type.slice(1)} delete error`);
      console.log(error);
      return;
    }
  };
  

  return (
    <div className="w-[15vw] md:w-[25vw] lg:w-[15vw] max-lg-xs:min-w-[35vw]  max-md-xs:w-[45vw] rounded-lg h-[35vh] border-2">
      <img
        loading="lazy"
        src={img}
        alt="ebook img"
        className="w-full h-[28vh] object-cover border-b-2 "
      />
      <div className="w-full h-[7vh] flex items-center justify-between px-5 ">
        <img src={edit} alt="" className="h-8 cursor-pointer" />
        <img
          onClick={handelDelete}
          src={deletesvg}
          alt=""
          className="h-8 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Card;
