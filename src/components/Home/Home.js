import React from "react";
import Card from "../Car/Card";
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
                title={res.video?.title}
                thumbnails={res.video?.thumbnails[1]?.url}
                changeslider={changeslider}
                channelID={res.video?.videoId}
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
                title={res.video?.title}
                thumbnails={res.video?.thumbnails[1]?.url}
                changeslider={changeslider}
                channelID={res.video?.videoId}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
