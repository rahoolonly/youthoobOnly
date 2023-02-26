import React from "react";
import {useGetRelatedVideoQuery} from '../Services/apiSlice'
import { useParams } from "react-router-dom";
import "./RelatedVideos.css";
import RelatedVideoList from "./RelatedVideoList/RelatedVideoList";

const RelatedVideos = () => {
  const { id } = useParams();
  const { data, isError, error } = useGetRelatedVideoQuery(id);


  if (isError) {
    return <h1>{error}</h1>;
  }


  return (
    <div className="relatedVideos">
      <h2>Related Videos</h2>
      {data?.contents.map((res, index) => {
        return (
          <RelatedVideoList
            key={index}
            relatedVideoImg={res.video?.thumbnails[0].url}
            relatedVideoTitle={res.video?.title}
            relatedVideoChannelName={res.video?.author?.title}
            relatedVideoViews={res.video?.stats.views > 1000000
              ? (res.video?.stats.views / 1000000).toFixed(1) + "M views"
              : res.video?.stats.views > 100000
              ? Math.floor(res.video?.stats.views / 1000) + "k views"
              : res.video?.stats.views > 10000
              ? (res.video?.stats.views / 1000).toFixed(1) + "k views"
              : res.video?.stats.views > 1000
              ? (res.video?.stats.views / 1000).toFixed(1) + "k views"
              : res.video?.stats.views == null
              ? res.video?.stats.viewers + " views"
              : res.video?.stats.views + " views"}
            relatedVideoPublisedTime={res.videos?.publishedTimeText}
            videoId = {res.video?.videoId}
          />
        );
      })}
    </div>
  );
};

export default RelatedVideos;
