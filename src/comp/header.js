import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* As Desktop */}
      <div className="myheader">
        <header className="hide-when-mobile ali">
          <h1>
            <Link to="/">c4arab.dev</Link>
          </h1>
          <ul className="flex">
            <li className="main-list">
              <NavLink className="main-link" to="/htmlCourse">
                HTML
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <NavLink to="/htmlCourse">Full Course</NavLink>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/cssCourse">
                CSS
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <NavLink to="/cssCourse">Full Course</NavLink>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li className="mini-projects">
                  <a href="">mini projects&nbsp; + </a>
                  <ul className="sub-sub-ul">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/javascriptCourse">
                JavaScript
              </NavLink>
              <ul className="sub-ul sub-of-js">
                <li>
                  <NavLink to="/javascriptCourse">coming soon🔥</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </header>

        {/* As Mobile */}
        <header className="show-when-mobile ali">
          <h1>c4arab.dev</h1>
          <label className="absolute" htmlFor="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />
          <div className="show-on-click">
            <div className="main-div">
              <label htmlFor="html">
                HTML <i className="fas fa-plus" />
              </label>
              <input id="html" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <NavLink to="/htmlCourse">Full Course</NavLink>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="css">
                CSS <i className="fas fa-plus" />
              </label>
              <input id="css" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <NavLink to="/cssCourse">Full Course</NavLink>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li>
                  <label className="mini-projects" htmlFor="mini">
                    mini projects <i className="fas fa-plus" />
                  </label>
                  <input id="mini" type="checkbox" />
                  <ul className="sub-sub-div">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="js">
                JavaScript <i className="fas fa-plus" />
              </label>
              <input id="js" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <NavLink to="/javascriptCourse">coming soon🔥</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
