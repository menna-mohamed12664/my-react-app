import React, { useRef } from "react";
import "./VedioPlayer.css";
import Vedio_Player from "../../assets/VedioPlayer.mp4";

function VedioPlayer({ playState, setPlayState }) {
  const play = useRef(null);
  const closeplayer = (e) => {
    if (e.target === play.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`Vedio-Player ${playState ? "" : "hide"}`}
      ref={play}
      onClick={closeplayer}
    >
      <video src={Vedio_Player} autoPlay muted controls></video>
    </div>
  );
}

export default VedioPlayer;
