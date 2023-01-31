import React from "react";
import { useEffect } from "react";
import Card from "../Car/Card";
import "./Home.css";
import axios from "axios";
import { useState } from "react";
import { useGetSuggestedVideosQuery } from "../Services/apiSlice";

function Home({ changeslider }) {
  const [result, setResult] = useState([]);

  const {data,isError,isLoading}= useGetSuggestedVideosQuery();
  useEffect(() => {
    // setResult(res.currentData)


    // const fetchData = async () => {
    //   const { data } = await axios.get(
    //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=lakshay&key=AIzaSyAeWBru8vVAjWt_A5qJhC00dhcoTsPxVsc"
    //   );
    //   setResult(data.items);
    //   console.log(data.items[0].snippet);
    // };
    // fetchData();


    // const options = {
    //   method: 'GET',
    //   url: 'https://youtube138.p.rapidapi.com/video/details/',
    //   params: {id: 'Fyf_af36XmM', hl: 'en', gl: 'US'},
    //   headers: {
    //     'X-RapidAPI-Key': '6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f',
    //     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }, [setResult]);

  if(isLoading){
    return <p>Loading</p>
  }

  if(isError){
    return <p>there is some error {isError}</p>
  }
  return (
    <>
      {changeslider && (
        <div className="home">
          {data.items.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.snippet.title}
                thumbnails={data.snippet.thumbnails.medium.url}
                changeslider={changeslider}
                channelID={data.id.videoId}
              />
            );
          })}
        </div>
      )}

      {!changeslider && (
        <div className="homeScreenChange">
          {data.items.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.snippet.title}
                thumbnails={data.snippet.thumbnails.medium.url}
                channel={data.snippet.channelTitle}
                changeslider={changeslider}
                channelID={data.id.videoId}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
