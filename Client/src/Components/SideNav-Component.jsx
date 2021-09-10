import React from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className="row">
      <div className="col-xl-12 text-center bg-dark">
        <ul className="appnav">
          <li>
            <Link className="navbarlink" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="navbarlink" to="/teacher">
              Teacher
            </Link>
          </li>

          <li>
            <Link className="navbarlink" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link className="navbarlink" to="/student">
              Student
            </Link>
          </li>
          <li>
            <Link className="navbarlink" to="/latesttable">
              Table
            </Link>
          </li>
          <li>
            <Link className="navbarlink" to="/latesttable2">
              Latest Table
            </Link>
          </li>
          <li>
            <Link className="navbarlink" to="/checkboxtree">
              CheckBox Tree
            </Link>
          </li>
          <li>
            <Link className="navbarlink" to="/tree">
              Tree
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
