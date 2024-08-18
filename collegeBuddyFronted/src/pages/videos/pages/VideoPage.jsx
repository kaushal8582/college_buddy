import React from "react";
import VideoCard from "../component/VideoCard";
import { useContext } from "react";
import myContext from "../../../components/context/myContext";

const VideoPage = () => {
  const context = useContext(myContext);
  const { getAllVideo } = context;

  return (
    <div className="w-full min-h-screen pt-[120px] px-[100px] bg-white flex items-start justify-center gap-5 flex-wrap">
      {getAllVideo?.length > 0 ? (
        getAllVideo.map((item) => (
          <VideoCard url={item.videoLink} key={item._id} />
        ))
      ) : (
        <h1>Not have any video, sorry 🤔🤩🤗</h1>
      )}
    </div>
  );
};

export default VideoPage;
