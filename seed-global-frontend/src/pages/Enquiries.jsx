import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledUniversities } from "../redux/DataReducer/Action";

export const Enquiries = () => {
  const { token } = useSelector((state) => state.AuthReducer);
  const { enquiries } = useSelector((state) => state.DataReducer);
  //   console.log(enquiries, "enquiries", token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrolledUniversities(token));
  }, []);
  return (
    <div>
      <h1>Enquiries</h1>
      <div>
        {enquiries.map((element, index) => (
          <div key={index} className="enrolled-card">
            <h3>name : {element.name}</h3>
            <h3>course : {element.course}</h3>
            <h3>status : {element.status}</h3>
            <h3>date : {element.date}</h3>
          </div>
        ))}
        {enquiries.length == 0 && <h1>NOT Enrolled</h1>}
      </div>
    </div>
  );
};
