import React from "react";
import ParticularVideo from "../ParticularVideo/ParticularVideo";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import "./Particular_Section.css";

const Particular_Section = () => {
  return (
    <div className="particularSection">
    <div className="particularVideoSection">
    <ParticularVideo />
    </div>
      <div className="RelatedVideosSection">
        {" "}
        <RelatedVideos />
      </div>
    </div>
  );
};

export default Particular_Section;
