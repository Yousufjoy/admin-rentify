import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          Admin Panel
        </Link>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to={"/"} className="navbar-brand ml-2">
              View Users
            </Link>
            <a href="#"> Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
