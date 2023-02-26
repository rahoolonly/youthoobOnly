import React from "react";
import SearchVideoslist from "./SearchVideoslist";
import "./SearchVideos.css";
import { useGetVideosBySearchQuery } from "../Services/apiSlice";
import { useParams } from "react-router-dom";

const SearchVideos = () => {
  const { keyword } = useParams();
  // const keyword = window.location.pathname.split("/search/");

  console.log(keyword);

  // if (keyword === "%20") {
  //   keyword = keyword.split("%20");
  // }
  const { data, isError, isLoading } = useGetVideosBySearchQuery(keyword);
 
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
            particularChannelName={res?.channel?.title}
            particularChannelThumbnail={res?.channel?.avatar[0]?.url}
            particularChannelSubscriber={res?.channel?.stats?.subscribersText}
            particularChannelUrl={res?.channel?.canonicalBaseUrl}
            particularChannelDescri={res?.channel?.descriptionSnippet}
            thumbnails={
              res.video?.thumbnails[1]?.url == null
                ? res.video?.thumbnails[0]?.url
                : res.video?.thumbnails[1]?.url
            }
            title={res.video?.title}
            views={
              res.video?.stats.views > 1000000
                ? (res.video?.stats.views / 1000000).toFixed(1) + "M"
                : res.video?.stats.views > 100000
                ? Math.floor(res.video?.stats.views / 1000) + "k views"
                : res.video?.stats.views > 10000
                ? (res.video?.stats.views / 1000).toFixed(1) + "k views"
                : res.video?.stats.views > 1000
                ? (res.video?.stats.views / 1000).toFixed(1) + "k views"
                : (res.video?.stats.views == null ? res.video?.stats.viewers +" views"
                : (res.video?.stats.views +" views"))
            }
            publishedTime={res.video?.publishedTimeText}
            channelLogo={res.video?.author?.avatar[0]?.url}
            channelName={res.video?.author?.title}
            description={res.video?.descriptionSnippet}
            channelID={res.video?.videoId}
          />
        );
      })}
    </div>
  );
};

export default SearchVideos;
