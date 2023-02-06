import React from "react";
import "./ParticularVideo.css";
import { useGetParticularVideoDetailsQuery } from "../Services/apiSlice";
import { useParams } from "react-router-dom";

const ParticularVideo = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetParticularVideoDetailsQuery(id);

  if (isError) {
    return <h3>There is some error</h3>;
  }

  if (isLoading) {
    return <h3>loading ...</h3>;
  }
  return (
    <>
      <div className="particular-video">
        <div className="video">
          <iframe
            title={data?.publishedDate}
            width={"700px"}
            height={"400px"}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="particular-video-text">
          <div className=" particular-video-title"></div>
          {data?.title}
          <div className="particular-video-logo-with-text">
            <div className="particular-video-logo">
              <img src={data?.author?.avatar[1].url} alt="" />
            </div>
            <div className="particular-video-channelName">
              {data?.author.title}
            </div>
          </div>

          <div className="desc-with-views">
            <div className="particularVideo-views">
              <div>{data?.stats.views} views </div>
              {data?.publishedDate}
            </div>

            <div className="discription">{data?.description}</div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ParticularVideo;
