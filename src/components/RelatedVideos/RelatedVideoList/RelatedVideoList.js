import React from "react";
import "./RelatedVideoList.css";
import { Link } from "react-router-dom";

export const RelatedVideoList = ({
  relatedVideoImg,
  relatedVideoTitle,
  relatedVideoChannelName,
  relatedVideoViews,
  relatedVideoPublisedTime,
  videoId,
}) => {
  return (
    <Link to={`/video/${videoId}`}  replace >
      <div className="reatedVideoList">
        <div className="realtedVideoImg">
          <img src={relatedVideoImg} alt="" />
        </div>
        <div className="realtedVideoText">
          <div className="particularVideo-views realtedVideoTitle">
            {relatedVideoTitle}...
          </div>
          <div className="particularVideoSubs relatedVideoChannelName">
            {relatedVideoChannelName}
          </div>
          <div className="particularVideoSubs">
            {relatedVideoViews} {relatedVideoPublisedTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideoList;
