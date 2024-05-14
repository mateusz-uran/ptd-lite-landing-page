import React from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import VideoPlayerWrapper from "./VideoPlayerWrapper";

const Modal = ({ show, onCloseButtonClick, videoSrc }) => {
  if (!show) {
    return null;
  }

  const videoOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    src: videoSrc,
    type: "video/mp4",
  };

  return createPortal(
    <section id="modal">
      <header>
        <button onClick={onCloseButtonClick}>
          <MdClose />
        </button>
      </header>
      <div className="content">
        <VideoPlayerWrapper videoOptions={videoOptions} />
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

export default Modal;
