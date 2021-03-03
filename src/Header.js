import { Avatar} from "@material-ui/core";
import { ExpandMore, Language, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function Header() {
    return (
      <div className="header">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/ef/7f/ab/ef7fabac2ae149956e2f6e9aa46d5055.gif"
            alt=""
            className="header__icon"
          />
        </Link>
        <div className="header__center">
          <input type="text" />
          <SearchOutlined />
        </div>
        <div className="header__right">
          <p>Become a host</p>
          <Language />
          <ExpandMore />
          <Avatar />
        </div>
      </div>
    );
}

export default Header;
