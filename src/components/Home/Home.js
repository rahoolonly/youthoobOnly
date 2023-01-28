import React from "react";
import Card from "../Car/Card";
import "./Home.css";
function Home({ changeslider }) {
  return (
    <>
      {changeslider && (
        <div className="home">
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
        </div>
      )}

      {!changeslider && (
        <div className="homeScreenChange">
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
          <Card changeslider={changeslider} />
        </div>
      )}
    </>
  );
}

export default Home;
