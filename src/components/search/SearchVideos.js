import React from "react";
import SearchVideoslist from "./SearchVideoslist";
import "./SearchVideos.css";
import { useGetVideosBySearchQuery } from "../Services/apiSlice";
import { useParams } from "react-router-dom";

const SearchVideos = () => {
  const { keyword } = useParams();
  // const keyword = window.location.pathname.split("/search/");

  // if (keyword === "%20") {
  //   keyword = keyword.split("%20");
  // }
  const { data, isError, isLoading } = useGetVideosBySearchQuery(keyword);
  console.log(data?.contents);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There is some error</h1>;
  }

  return (
    <div className="search-videos">
      {data?.contents.map((res, index) => {
        return (
          <SearchVideoslist
            key={index}
            title={res.video?.title}
            thumbnails={res.video?.thumbnails[1]?.url}
            channel={res.video.author.title}
            channelLogo={res.video?.author.avatar[0]?.url}
            channelID={res.video.videoId}
          />
        );
      })}
    </div>
  );
};

export default SearchVideos;
