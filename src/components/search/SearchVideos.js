import React, { useEffect, useState } from "react";
import SearchVideoslist from "./SearchVideoslist";
import { RxAvatar } from "react-icons/rx";
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
   console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There is some error</h1>;
  }

  return (
    <div className="search-videos">
      {data.items.map((val, index) => {
        return (
          <SearchVideoslist
            key={index}
            title={val.snippet.title}
            thumbnails={val.snippet.thumbnails.medium.url}
            channel={val.snippet.channelTitle}
            channelLogo={<RxAvatar />}
            channelID={val.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default SearchVideos;
