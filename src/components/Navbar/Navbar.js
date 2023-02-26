import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { MdSearch, MdCameraAlt, MdNotificationsNone } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../images/Minimalist_Initial_Letter_Logo-removebg-preview (1).png";
import "./Navbar.css";

function Navbar({ changeslider, setChangeslider }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [mobileNavbar, setMobileNavbar] = useState(false);
 

  const changeSliding = () => {
    if (changeslider) {
      setChangeslider(false);
    } else if (!changeslider) {
      setChangeslider(true);
    }
  };

  const openSearchForMobile = () => {
    setMobileNavbar(true);
  };

  const closeSearchForMobile = () => {
    setMobileNavbar(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <nav className={`navbar ${mobileNavbar && "navbarExtendMobile"}`}>
      {!mobileNavbar && (
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
      )}

      {!mobileNavbar && (
        <div onClick={openSearchForMobile} className="mobileNavSearchIcon">
          <button>
            {" "}
            <MdSearch />
          </button>
        </div>
      )}

      {mobileNavbar && (
        <div className="searchIconsforMobile">
          <div onClick={closeSearchForMobile} className="mobileBackArrow">
            <AiOutlineArrowLeft />
          </div>

          <div className="mobileNavSearch">
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <button
              onClick={() => {
                navigate(`/search/${keyword}`);
              }}
            >
              {" "}
              <MdSearch />
            </button>
          </div>
        </div>
      )}

      <div className="navbar_search">
        <div className="largeDeviceNavSearch">
          <input
            type="text"
            value={keyword}
            onKeyDown={handleKeyDown}
            placeholder="Search Here"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              navigate(`/search/${keyword}`);
            }}
          >
            {" "}
            <MdSearch />
          </button>
        </div>

        {/* <div className={`icon_with_input ${show && "open_iconWithInput"}`}>
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
          <input
            onClick={visibleIcon}
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="Search"
            type="text"
          />
        </div>
        <button
          onClick={() => {
            navigate(`/search/${keyword}`);
          }}
        >
          <MdSearch />
        </button> */}
      </div>

      <div className="icons">
        <div className="icon">
          <MdCameraAlt />
        </div>
        <div className="icon">
          <MdNotificationsNone />
        </div>
        <div className="icon">
          <RxAvatar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
