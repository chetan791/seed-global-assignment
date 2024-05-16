import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnrolledUniversities,
  updateEnquries,
} from "../redux/DataReducer/Action";
import "../css/Enquiries.css";
import "../css/enrolled.css";

export const Enquiries = () => {
  const { token } = useSelector((state) => state.AuthReducer);
  const { enquiries } = useSelector((state) => state.DataReducer);
  //   console.log(enquiries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrolledUniversities(token));
  }, []);
  return (
    <div id="Enquiries">
      <h1>Enquiries</h1>
      <div id="enquiries-container">
        {enquiries &&
          enquiries.map((element, index) => (
            <div key={index} className="enrolled-card">
              <h3>name : {element.name}</h3>
              <h3>course : {element.course}</h3>
              <h3>university : {element.email}</h3>
              <h3>date : {element.date}</h3>
              {element.status == "pending" && (
                <div>
                  <button
                    style={{
                      backgroundColor: "green",
                      marginRight: "10px",
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "none",
                    }}
                    onClick={() => {
                      dispatch(
                        updateEnquries({
                          _id: element._id,
                          status: "accepted",
                          token,
                        })
                      );
                    }}
                  >
                    accept
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      marginRight: "10px",
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "none",
                    }}
                    onClick={() => {
                      dispatch(
                        updateEnquries({
                          _id: element._id,
                          status: "rejected",
                          token,
                        })
                      );
                    }}
                  >
                    reject
                  </button>
                </div>
              )}
            </div>
          ))}
        {enquiries.length == 0 && <h1>NOT Enrolled</h1>}
      </div>
    </div>
  );
};
