import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOndemandVideo,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import SideItems from "../SideItems/SideItems";
import Siderows from "../SideItems/Siderows";
import "./Sidebar.css";

const Sidebar = ({ changeslider }) => {
  return (
    <>
      {changeslider && (
        <div className="sidebar">
          <SideItems phone={<MdHomeFilled />} title="Home" />
          <SideItems phone={<MdSubscriptions />} title="Entertainment" />
          <SideItems phone={<MdOutlineVideoLibrary />} title="Coding" />
          <SideItems phone={<MdHistory />} title="Punjabi song" />
          <SideItems phone={<MdOndemandVideo />} title="Hindi song" />
          <SideItems phone={<MdOutlineWatchLater />} title="Bhojpuri song" />
          {/* <SideItems phone={<AiOutlineLike />} title="Liked Videos" />
          <SideItems phone={<MdOutlineExpandMore />} title="Show more" /> */}
        </div>
      )}

      {!changeslider && (
        <div className="second_row">
          <Siderows icon={<MdHomeFilled />} title={"Home"} />
          <Siderows icon={<MdSubscriptions />} title={"Entertainment"} />
          <Siderows icon={<MdOutlineVideoLibrary />} title={"Punjabi song"} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
