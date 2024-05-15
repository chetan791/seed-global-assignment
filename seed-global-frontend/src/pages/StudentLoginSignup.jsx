import React, { useState } from "react";
import "../css/StudentLoginSignup.css";
import logo from "../assets/SEED_LOGO.webp";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../redux/AuthReducer/Action";
import { useNavigate } from "react-router-dom";

export const StudentLoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for toggle
  const [show, setShow] = useState(false);

  // for login
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  // for signup
  const [signupdata, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    gender: "",
    role: "student",
  });

  // to change the value of input and store in state
  const handelchange = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
    setSignupData({ ...signupdata, [e.target.name]: e.target.value });
  };

  // for login
  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login(logindata));
    navigate("/landing");
  };

  // for signup
  const handelSignup = (e) => {
    e.preventDefault();
    dispatch(signup(signupdata));
  };

  // for toggle
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div id="StudentLoginSignup-container">
      {show ? (
        <h1
          className="blue-button"
          style={{
            cursor: "pointer",
            marginBottom: "0",
            backgroundColor: "#f28e43",
          }}
          onClick={toggleShow}
        >
          Go To Signup
          <i className="fa-solid fa-arrow-right"></i>
        </h1>
      ) : (
        <h1
          className="blue-button"
          style={{
            cursor: "pointer",
            marginBottom: "0",
            backgroundColor: "#f28e43",
          }}
          onClick={toggleShow}
        >
          Go To Login
          <i className="fa-solid fa-arrow-right"></i>
        </h1>
      )}
      {show ? (
        <div id="student-login">
          <img
            style={{
              marginTop: "0",
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
            src={logo}
            alt="logo"
          />
          <h1>Student Login</h1>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handelchange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handelchange}
            />
          </div>
          <div>
            <button
              style={{ backgroundColor: "#f28e43" }}
              className="blue-button"
              type="submit"
              onClick={handelLogin}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div id="student-signup" className={!show ? "show" : ""}>
          <img
            style={{
              marginTop: "0",
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
            src={logo}
            alt="logo"
          />
          <h1>Student Signup</h1>

          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            onChange={handelchange}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handelchange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handelchange}
          />
          <input
            type="number"
            placeholder="Age"
            required
            name="age"
            onChange={handelchange}
          />

          <select name="gender" onChange={handelchange}>
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>

          <button
            className="blue-button"
            style={{ backgroundColor: "#f28e43" }}
            onClick={handelSignup}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};
