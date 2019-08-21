import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header
        className="masthead"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Welcome To Wage Edge</div>
            <div className=" intro-lead-in">
              The one place to find out your rights as an Australian
              International student
            </div>
            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              to="/laws"
            >
              Tell Me More
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
