import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import JSON from "./video1.json";
import Nav from "./Nav";
import "./Youtube.css";

const Youtube = () => {
  let [data, setData] = useState(JSON);

  let [play, setPlay] = useState(data[0]);

  let handlePlay = (datas) => {
    setPlay(datas);
  };

  return (
    <div className="task">
      <h1 className="task-header">YouTube</h1>
      <div className="task-container Youtube">
        <Nav />
        <VideoPlayer data={data} play={play} handlePlay={handlePlay} />
      </div>
    </div>
  );
};

export default Youtube;
