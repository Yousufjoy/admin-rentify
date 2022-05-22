import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <h1>Admin Panel</h1>
        </Link>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to={"/"} className="navbar-brand ml-2">
              <a href="#">
                <li style={{ color: "white" }}> Users information</li>
              </a>
            </Link>
          </li>
          <Link to={"/viewadd"} className="navbar-brand ml-2">
            <a href="#">
              <li style={{ color: "white" }}>Advertisement details</li>{" "}
            </a>
          </Link>
          <a href="#">
            {" "}
            <h4 style={{ marginLeft: "10px" }}>Logout</h4>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
