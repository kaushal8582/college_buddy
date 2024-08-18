import React from "react";

const VideoCard = ({url}) => {
  function getYouTubeID(url) {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }
    const urlParams = parsedUrl.searchParams;
    return urlParams.get("v");
  }

  const id = getYouTubeID(url);
  


  return (
    <div>
      <iframe
      className="rounded-xl w-[400px] max-md-xs:w-[350px] max-xs:w-[300px]  "
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
