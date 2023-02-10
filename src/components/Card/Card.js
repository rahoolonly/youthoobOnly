import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({
  changeslider,
  particularChannelName,
  particularChannelThumbnail,
  particularChannelSubscriber,
  particularChannelUrl,
  particularChannelDescri,
  thumbnails,
  videoLogo,
  title,
  channelName,
  views,
  publishedTime,
  VideoID,
}) {
  return (
    <>
      {/* {particularChannelSubscriber && (
        <div>
          <img src={particularChannelThumbnail} alt="" />

          <h1>{particularChannelName}</h1>
        </div>
      )} */}

      {particularChannelName && particularChannelSubscriber ? (
        <div></div>
      ) : (
        <div>
          {changeslider && (
            <div className="card">
              <Link to={`video/${VideoID}`}>
                <img className="card-thumbnail" src={thumbnails} alt="" />
                <div className="logo-with-text">
                  <div className="VideoLogo">
                    <img src={videoLogo} alt="" />
                  </div>
                  <div className="text">
                    <div className="main-title">{title}</div>
                    <div className="channel-name">{channelName}</div>

                    <div className="views-with-time">
                      {views} {publishedTime}
                    </div>
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
                    <div className="main-title">{title}</div>
                    <div className="channel-name">{channelName}</div>

                    <div className="views-with-time">
                      {views} {publishedTime}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Card;
