import React, { useEffect } from "react";
import "../css/enrolled.css";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledUniversities } from "../redux/DataReducer/Action";
import { EnrolledCard } from "../components/EnrolledCard";

export const EnrolledPage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AuthReducer);
  const { enquries } = useSelector((state) => state.DataReducer);
  console.log(enquries);

  useEffect(() => {
    dispatch(getEnrolledUniversities(token));
  }, []);

  return (
    <div
      style={{
        paddingTop: "100px",
        paddingRight: "7%",
        paddingLeft: "7%",
        paddingBottom: "50px",
      }}
    >
      <h1>Enrolled Page</h1>
      <div id="EnrolledPage-container">
        {enquries.map((element) => (
          <EnrolledCard element={element} />
        ))}
        {enquries.length == 0 && <h1>NOT Enrolled</h1>}
      </div>
    </div>
  );
};
