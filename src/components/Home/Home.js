import React from "react";
import Card from "../Card/Card";
import "./Home.css";
import { useGetSuggestedVideosQuery } from "../Services/apiSlice";

function Home({ changeslider }) {
  const { data, isError, isLoading } = useGetSuggestedVideosQuery();
  console.log(data?.contents);
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>there is some error {isError}</p>;
  }
  return (
    <>
      {changeslider && (
        <div className="home">
          {data?.contents?.map((res, index) => {
            return (
              <Card
                key={index}
                thumbnails={res.video?.thumbnails[1]?.url==null?res.video?.thumbnails[0]?.url:res.video?.thumbnails[1]?.url}
                videoLogo = {res.video?.author.avatar[0].url}
                title={res.video?.title}
                channelName={res.video?.author.title}
                views={res.video?.stats.views>1000000? (res.video?.stats.views/1000000).toFixed(1) + "M":(res.video?.stats.views>100000?Math.floor(res.video?.stats.views/1000) + "K views":(res.video?.stats.views>10000?(res.video?.stats.views/1000).toFixed(1)+"k views":(res.video?.stats.views>1000?((res.video?.stats.views)/10).toFixed(1) + "k views":res.video?.stats.views)))}
                publishedTime={res.video?.publishedTimeText }
                VideoID={res.video?.videoId}
                changeslider={changeslider}
              />
            );
          })}
        </div>
      )}

      {!changeslider && (
        <div className="homeScreenChange">
          {data?.contents?.map((res, index) => {
            return (
              <Card
                key={index}
                thumbnails={res.video?.thumbnails[1]?.url==null?res.video?.thumbnails[0]?.url:res.video?.thumbnails[1]?.url}
                videoLogo = {res.video?.author.avatar[0].url}
                title={res.video?.title}
                channelName={res.video?.author.title}
                views={res.video?.stats.views>1000000? (res.video?.stats.views/1000000).toFixed(1) + "M":(res.video?.stats.views>100000?Math.floor(res.video?.stats.views/1000) + "K views":(res.video?.stats.views>10000?(res.video?.stats.views/1000).toFixed(1)+"k views":(res.video?.stats.views>1000?((res.video?.stats.views)/10).toFixed(1) + "k views":res.video?.stats.views)))}
               publishedTime={res.video?.publishedTimeText }
                VideoID={res.video?.videoId}
                changeslider={changeslider}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
