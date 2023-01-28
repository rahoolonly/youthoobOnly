import React from "react";
import "./sideitems.css";
import { Link } from "react-router-dom";

function SideItems({ phone, title }) {
  return (
    <Link className="list">
      {" "}
      <div className="item_icon">{phone} </div>
      <div className="title">{title}</div>
    </Link>
  );
}

export default SideItems;
