import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";

const VideoContainer = () => {


  useEffect(() => {

    getVideos()

  }, []);

const getVideos = async () =>{
  const data = await fetch(YOUTUBE_VIDEO_API)
  const json = await data.json();
  console.log("YOUTUBE_VIDEO_API",json);
  

}

  return <div>VideoContainer</div>;
};

export default VideoContainer;
