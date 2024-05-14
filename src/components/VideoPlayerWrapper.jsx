import React, { useRef } from "react";
import VideoPlayer from "./VideoPlayer";

const VideoPlayerWrapper = ({ videoOptions }) => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: videoOptions.autoPlay,
    controls: videoOptions.controls,
    responsive: videoOptions.responsive,
    fluid: videoOptions.fluid,
    sources: [
      {
        src: videoOptions.src,
        type: videoOptions.type,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <VideoPlayer
      className="video-player"
      options={videoJsOptions}
      onReady={handlePlayerReady}
    />
  );
};

export default VideoPlayerWrapper;
