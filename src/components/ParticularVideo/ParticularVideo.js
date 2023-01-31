import React, { useEffect, useState } from "react";
import log from "../images/IMG_20190731_143717_224.jpg";
import { RxAvatar } from "react-icons/rx";
import "./ParticularVideo.css";
import {
  useGetParticularVideoDetailsQuery,
  usePlayParticularVideoQuery,
} from "../Services/apiSlice";
import { usePlaySearchVideoQuery } from "../Services/particularVideoApi";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayar from "react-player";

const ParticularVideo = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetParticularVideoDetailsQuery(id);
const [video,setVideo] = useState('');
  // console.log(data.items[0].statistics.viewCount);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://yt-api.p.rapidapi.com/dl",
      params: { id: `${'RJEp2H_zn7o'}` },
      headers: {
        "X-RapidAPI-Key": "6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f",
        "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setVideo(response.data.adaptiveFormats[0]);
        console.log(video);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  // if (isError) {
  //   return <h3>There is some error</h3>;
  // }

  // if (isLoading) {
  //   return <h3>loading ...</h3>;
  // }
  return (
    <>
     <ReactPlayar
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
      ></ReactPlayar>
      {/* <div className="particular-video">
        <div className="video">  
       
        </div>

        <div className="particular-video-text">
          <div className=" particular-video-title"></div>
          {data.items[0].snippet.title}
          <div className="particular-video-logo-with-text">
            <div className="particular-video-logo">
              <RxAvatar />
            </div>
            <div className="particular-video-channelName">
              {data.items[0].snippet.channelTitle}

            </div>
          </div>

          <div className="desc-with-views">
            <div className="particularVideo-views">
              <div>{data.items[0].statistics.viewCount} views </div>
              {data.items[0].statistics.publishedDate}
            </div>

            <div className="discription">{data.items[0].statistics.description}</div>
          </div>
        </div>
      </div> */}
      ;
    </>
  );
};

export default ParticularVideo;
