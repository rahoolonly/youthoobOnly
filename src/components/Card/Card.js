import React from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import "./card.css";

function Card({
  changeslider,
  thumbnails,
  videoLogo,
  title,
  channelName,
  views,
  publishedTime,
  VideoID,
}) {

  let view = views;
  if(view>1000000){
    view = Math.floor(view/1000000) + "M"
  }else if(view>100000){
    view = Math.floor(view/1000000) + "K"
  }else{
    view = view;
  }


  return (
    <>
      {changeslider && (
        <div className="card">
          <Link to={`video/${VideoID}`}>
            <img className="card-thumbnail" src={thumbnails} alt="" />
            <div className="logo-with-text">
              <div className="VideoLogo">
            <img src={videoLogo} alt="" />
              </div>
              <div className="text">
                <div className="main-title">
                  {title}
                </div>
                <div className="channel-name">{channelName}</div>

                <div className="views-with-time">{view} {publishedTime}</div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {!changeslider && (
        <div className="card">
          <Link to={`video/${VideoID}`}>
            <img className="card-thumbnail" src={thumbnails} alt="" />
            <div className="logo-with-text">
              <div className="VideoLogo">
              <img src={videoLogo} alt="" />
              </div>
              <div className="text">
                <div className="main-title">
                  {title}
                </div>
                <div className="channel-name">{channelName}</div>

                <div className="views-with-time">{view} {publishedTime}</div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Card;
