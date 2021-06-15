import React from "react";
import { NavLink } from "react-router-dom";
import app from "./Firebase";


export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto text-center">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/shop-products"
              className="nav-link"
              activeClassName="active"
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link" activeClassName="active  ">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Signin" className="nav-link" activeClassName="active" >
              Signin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
          <button 
           className="btn mt-0"
          onClick={() => app.auth().signOut()}>Sign out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
