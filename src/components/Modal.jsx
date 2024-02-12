import React, { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

const Modal = ({ show, onCloseButtonClick, videoSrc }) => {
  if (!show) {
    return null;
  }
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoSrc,
        type: "video/mp4",
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

  return createPortal(
    <section id="modal">
      <header>
        <button onClick={onCloseButtonClick}>
          <MdClose />{" "}
        </button>
      </header>
      <div className="content">
        <VideoPlayer
          className="video-player"
          options={videoJsOptions}
          onReady={handlePlayerReady}
        />
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

export default Modal;
