import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header row">
    <div className="col-sm-1"></div>
    <div className="title col-sm-5">
      <h2>{props.children}</h2>
    </div>
    <div className="col-sm-2"></div>
    <div className="scores col-sm-4">
      <h2>
        Score: {props.score} Highscore: {props.highscore}
      </h2>
    </div>
  </div>
);

export default Header;
