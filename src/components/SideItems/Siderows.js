import React from "react";
import { Link } from "react-router-dom";
import "./siderow.css";
function Siderows({ icon, title }) {
  let keyword ;
  title === 'Home'?keyword = 'Coding': keyword = title
  
  return (
    <div>
      <Link to={`/search/${keyword}`} className="second-sidebar">
        {" "}
        <div className="second-sidebar-icon">{icon} </div>
        <div className="second-sidebar-title">{title}</div>
      </Link>
    </div>
  );
}

export default Siderows;
