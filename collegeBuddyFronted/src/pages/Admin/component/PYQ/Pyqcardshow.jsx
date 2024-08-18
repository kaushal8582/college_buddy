import React from "react";

import edit from "../../../../assets/resources/svgs/edit.svg";
import deletesvg from "../../../../assets/resources/svgs/delete.svg";
import toast from "react-hot-toast";

const Pyqcardshow = ({ university, course, sem, year, id }) => {
  const handelDelete = async () => {
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
      const response = await fetch(
        `http://localhost:3000/collegebuddy/api/v1/pyq/deletepyq/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          method: "POST",
        }
      );

      if(response.ok){
        toast.success("Pyq delete successfully");
      }


    } catch (error) {
      toast.error("Pyq delete error ")
      console.log(error);
      return;
      
    }
  };

  return (
    <div className="w-[15vw] md:w-[25vw] lg:w-[15vw] max-lg-xs:min-w-[35vw]  max-md-xs:w-[45vw] rounded-lg h-[35vh] border-2">
      <div className="w-full h-[80%] flex flex-col p-2">
        <h3>{university} </h3>
        <h3>{course} </h3>
        <h3>
          semester : <span>{sem}th</span>{" "}
        </h3>
        <h3>
          Year : <span>{year}</span>{" "}
        </h3>
      </div>

      <div className="w-full h-[7vh] flex items-center justify-between px-5 ">
        <img src={edit} alt="" className="h-8 cursor-pointer" />
        <img onClick={handelDelete} src={deletesvg} alt="" className="h-8 cursor-pointer " />
      </div>
    </div>
  );
};

export default Pyqcardshow;
