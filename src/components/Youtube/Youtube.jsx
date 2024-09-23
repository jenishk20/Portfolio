import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { youtube } from "../../utils/constants";
import "./Youtube.css";

const Youtube = () => {
  return (
    <div id="youtube" className="youtube">
      <div className="youtube-title">
        <h1>Youtube</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="youtube-container">
        {youtube.map((video) => {
          return (
            <div key={video.id} className="youtube-details">
              <iframe
                title={video.title}
                src={video.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="420"
                height="315"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Youtube;
