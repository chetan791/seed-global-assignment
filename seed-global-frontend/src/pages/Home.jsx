import React from "react";
import "../css/Home.css";
import student from "../assets/student.png";
import university from "../assets/university.png";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/AuthReducer/Action";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.AuthReducer.role);

  const chooseRole = (user) => {
    dispatch(setRole(user));
  };
  return (
    <div id="RoleContainer">
      <div id="login_container">
        <div className="login">
          <img src={student} alt="student" />
          <p>Are you a prospective student?</p>
          <Link to={"/student-login-signup"}>
            <button onClick={() => chooseRole("student")}>GET STARTED</button>
          </Link>
        </div>
        <div className="login">
          <img src={university} alt="university" />
          <p>Are you a university representative?</p>
          <Link to={"/landing"}>
            <button onClick={() => chooseRole("university")}>
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
