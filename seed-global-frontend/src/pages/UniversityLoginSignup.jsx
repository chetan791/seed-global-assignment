import React, { useState } from "react";
import "../css/UniversityLoginSignup.css";
import logo from "../assets/SEED_LOGO.webp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../redux/AuthReducer/Action";

export const UniversityLoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = useSelector((state) => {
    return state.AuthReducer;
  });

  // console.log(res);

  // for toggle
  const [show, setShow] = useState(false);

  // for login
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
    role: "university",
  });

  // for signup
  const [signupdata, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    country: "",
    cources: [],
    role: "university",
  });

  // to change the value of input and store in state
  const handelchange = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
    setSignupData({ ...signupdata, [e.target.name]: e.target.value });
  };

  // for login
  const handelLogin = (e) => {
    // e.preventDefault();
    dispatch(login(logindata));
    navigate("/landing");
  };

  // for signup
  const handelSignup = (e) => {
    // e.preventDefault();
    // console.log("clicked");
    dispatch(signup(signupdata));
    // console.log(signupdata);
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
          <h1>University Login</h1>

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
          <h1>University Signup</h1>
          <div className="input-container">
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
              type="text"
              placeholder="Address"
              required
              name="address"
              onChange={handelchange}
            />

            <input
              type="text"
              placeholder="Country"
              required
              name="country"
              onChange={handelchange}
            />

            <input
              type="text"
              placeholder="Add courses with comma separated"
              required
              name="cources"
              onChange={(e) => {
                setSignupData({
                  ...signupdata,
                  cources: e.target.value.split(","),
                });
              }}
            />
          </div>

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
