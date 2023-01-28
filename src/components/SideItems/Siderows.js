import React from "react";
import { Link } from "react-router-dom";
import "./siderow.css";
function Siderows({ icon, title }) {
  return (
    <div>
      <Link className="second-sidebar">
        {" "}
        <div className="second-sidebar-icon">{icon} </div>
        <div className="second-sidebar-title">{title}</div>
      </Link>
    </div>
  );
}

export default Siderows;
