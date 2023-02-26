import React from "react";
import { Link } from "react-router-dom";
import "./SearchVideos.css";

const SearchVideoslist = ({
  particularChannelName,
  particularChannelThumbnail,
  particularChannelSubscriber,
  particularChannelUrl,
  particularChannelDescri,
  thumbnails,
  title,
  views,
  publishedTime,
  description,
  channelLogo,
  channelName,
  channelID,
}) => {
  return ( 
    <>
      {particularChannelName ? (
        <div>
          <div className="particularChannelDetails">
            <div className="thumbnail particularChannelLogo">
              <img src={particularChannelThumbnail} alt="" />
            </div>
         <div className="particularChannelText">
         <div className="particularChannelTitle video-title">{particularChannelName}</div>
            <div className="particularChannelSubs views-with-time">{ particularChannelUrl} {particularChannelSubscriber}</div>
            <div className="particularChannelDesc">{particularChannelDescri}</div>
         </div>
          </div>
        </div>
      ) : (
        <Link to={`/video/${channelID}`} className="videoList">
          <div className="thumbnail-with-text">
            <img className="thumbnail" src={thumbnails} alt="" />

            <div>
              <div className="video-title">{title}</div>
              <div className="searchVideoViews-with-time">
                {views} {publishedTime}
              </div>
              <div className="channelName-with-desc">
                <div className="channelName">
                  <div className="channelLogo">
                    <img src={channelLogo} alt="" />
                  </div>
                  {channelName}
                </div>
                <div className="desc">{description}</div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default SearchVideoslist;
