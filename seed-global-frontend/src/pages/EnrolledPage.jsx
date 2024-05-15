import React, { useEffect } from "react";
import "../css/enrolled.css";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledUniversities } from "../redux/DataReducer/Action";

export const EnrolledPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthReducer.token);

  useEffect(() => {
    dispatch(getEnrolledUniversities(token));
  }, []);
  return (
    <div id="EnrolledPage-container">
      <h1>Enrolled Page</h1>
    </div>
  );
};
