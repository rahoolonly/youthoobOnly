import React from "react";
import thumbnail from "../images/IMG_20190731_143717_224.jpg";
import { Link } from "react-router-dom";
import "./SearchVideos.css";


const SearchVideoslist = ({ channelLogo, title, thumbnails, channel ,channelID}) => {
  return (
    <div> 
      <Link to={`video/${channelID}`} className="videoList">   
        <div className="thumbnail-with-text">
          <img className="thumbnail" src={thumbnails} alt="" />

          <div>
            <div className="video-title">{title}</div>
            <div className="views-with-time">20M 3 months ago</div>
            <div className="channelName-with-desc">
              <div className="channelName">
                <div className="channelLogo">{channelLogo}</div>
                {channel}
              </div>
              <div className="desc">its a best youtube channel</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchVideoslist;