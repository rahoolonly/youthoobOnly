import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { MdSearch ,MdCameraAlt,MdNotificationsNone} from "react-icons/md";
import logo from "../images/Minimalist_Initial_Letter_Logo-removebg-preview (1).png";
import "./Navbar.css";

function Navbar({changeslider,setChangeslider}) {
  const [show, setShow] = useState(true);

  const visibleIcon = () => {
    if (show) {
      setShow(false);
    }
  };

  const disableIcon = () => {
    if (!show) {
      setShow(true);
    }
    // alert("you clicked navbar");
  };

  const changeSliding = ()=>{
    if(changeslider){
      setChangeslider(false)
    }else if(!changeslider){

      setChangeslider(true)
    }
  }

  return (
    <nav onClick={disableIcon} className="navbar">
      <div className="navbar_logo">
        <div onClick={changeSliding} className="icon">
          {" "}
          <RxHamburgerMenu />
        </div>
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar_search">
        <div className= {`icon_with_input ${show && "open_iconWithInput"}`}>
          {" "}
          {show ? (
            <div className="closeIcon">
              <MdSearch />
            </div>
          ) : (
            <div className="openIcon">
              <MdSearch />
            </div>
          )}
          <input onClick={visibleIcon} placeholder="Search" type="text" />
        </div>
        <button>
          <MdSearch />
        </button>
      </div>

      <div className="icons">
        <div className="icon"><MdCameraAlt/></div>
        <div className="icon"><MdNotificationsNone/></div>
        <div className="icon"><RxAvatar/></div>
      </div>
    </nav>
  );
}

export default Navbar;
