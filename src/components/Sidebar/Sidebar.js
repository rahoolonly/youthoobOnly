import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOndemandVideo,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import SideItems from "../SideItems/SideItems";
import Siderows from "../SideItems/Siderows";
import "./Sidebar.css";

const Sidebar = ({changeslider}) => {

  return (
    <>
      {changeslider && (
        <div className="sidebar">
          <SideItems phone={<MdHomeFilled />} title="Home" />
          <SideItems phone={<MdSubscriptions />} title="Subscriptions" />
          <SideItems phone={<MdOutlineVideoLibrary />} title="Library" />
          <SideItems phone={<MdHistory />} title="History" />
          <SideItems phone={<MdOndemandVideo />} title="Your Videos" />
          <SideItems phone={<MdOutlineWatchLater />} title="Watch Later" />
          <SideItems phone={<AiOutlineLike />} title="Liked Videos" />
          <SideItems phone={<MdOutlineExpandMore />} title="Show more" />
        </div>
      )}

      {!changeslider && (
        <div className="second_row">
          <Siderows icon={<MdHomeFilled />} title={"Home"} />
          <Siderows icon={<MdSubscriptions />} title={"Subscriptions"} />
          <Siderows icon={<MdOutlineVideoLibrary />} title={"Library"} />
        </div>
      )}
      
    </>
  );
};

export default Sidebar;
