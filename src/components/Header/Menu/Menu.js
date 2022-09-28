import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";

const Menu = () => {
  return (
    <MenuStyled>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "black", paddingTop: "33px" }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" style={{ color: "white" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/link">
                  WORK
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuStyled>
  );
};

export default Menu;
