import React, { useEffect } from "react";
import "../css/enrolled.css";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledUniversities } from "../redux/DataReducer/Action";

export const EnrolledPage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AuthReducer);
  const { enquries } = useSelector((state) => state.DataReducer);
  console.log(enquries);

  useEffect(() => {
    dispatch(getEnrolledUniversities(token));
  }, []);
  return (
    <div id="EnrolledPage-container">
      <h1>Enrolled Page</h1>
      {enquries.map((element) => (
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">{element.name}</h2>
            <p className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              culpa.
            </p>
          </div>
        </div>
      ))}
      {enquries.length == 0 && <h1>NOT Enrolled</h1>}
    </div>
  );
};
