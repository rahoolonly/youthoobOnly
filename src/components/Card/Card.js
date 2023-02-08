import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../images/IMG_20190731_143717_224.jpg";
import { RxAvatar } from "react-icons/rx";
import "./card.css";

function Card({ changeslider, title, thumbnails,channel ,channelID}) {
  
  return (
    <>
      {changeslider && (
        <div className="card">
          <Link  to={`video/${channelID}`}>
            <img className="thumbnail" src={thumbnails} alt="" />
            <div className="logo-with-text">
              <div className="logo">
                <RxAvatar />
              </div>
              <div className="text">
                <div className="main-title">
                  {/* Everything about Top G Rahool Only */}
                  {title}
                </div>
                <div className="channel-name">{channel}</div>

                <div className="views-with-time">1M views 10 days ago</div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {!changeslider && (
         <div className="card">
         <Link to={`video/${channelID}`}>
           <img className="thumbnail" src={thumbnails} alt="" />
           <div className="logo-with-text">
             <div className="logo">
               <RxAvatar />
             </div>
             <div className="text">
               <div className="main-title">
                 {/* Everything about Top G Rahool Only */}
                 {title}
               </div>
               <div className="channel-name">{channel}</div>

               <div className="views-with-time">1M views 10 days ago</div>
             </div>
           </div>
         </Link>
       </div>
      )}
    </>
  );
}

export default Card;
