import React from "react";
import edit from "../../../../assets/resources/svgs/edit.svg";
import deletesvg from "../../../../assets/resources/svgs/delete.svg";
import { toast } from "react-hot-toast";

const VideoCard = ({ url, id }) => {
  function getYouTubeID(url) {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }
    const urlParams = parsedUrl.searchParams;
    return urlParams.get("v");
  }

  const videoId = getYouTubeID(url);

  const handelDelete = async () => {
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(`http://localhost:3000/collegebuddy/api/v1/video/delete-video/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method:"POST",
      })

      if(response.ok){
        toast.success("Video delete successfully...");
      }

    } catch (error) {
      toast.error("Video delete error")
      console.log(error);
      
    }
  };

  return (
    <div className="w-[15vw] overflow-hidden md:w-[25vw] lg:w-[15vw] max-lg-xs:min-w-[35vw]  max-md-xs:w-[45vw] rounded-lg h-[35vh] border-2">
      <iframe
        className="rounded-xl w-[230px] max-md-xs:w-[350px] max-xs:w-[300px]  "
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
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

export default VideoCard;
