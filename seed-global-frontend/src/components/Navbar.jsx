import React from "react";
import logo from "../assets/SEED_LOGO.webp";
import "../css/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { role, isAuth } = useSelector((state) => state.AuthReducer);
  // console.log(role);
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      {!isAuth ? (
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            color: "white",
            fontSize: "20px",
            paddingTop: "40px",
            cursor: "pointer",
            marginRight: "50px",
            // border: "1px solid white",
          }}
        ></i>
      ) : role == "student" ? (
        <ul className="navbar_options">
          <Link to={"/landing"}>
            <li>home</li>
          </Link>
          <Link to={"/universities"}>
            <li>universities</li>
          </Link>
          <Link to={"/enrolled"}>
            <li>applications</li>
          </Link>
        </ul>
      ) : (
        <ul className="navbar_options">
          <Link to={"/landing"}>
            <li>home</li>
          </Link>
          <li>courses</li>
          <li>students</li>
          <Link to={"/enquiries"}>
            <li>enquiries</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};
