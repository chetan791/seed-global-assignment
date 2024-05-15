import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuniversities } from "../redux/DataReducer/Action";
import "../css/universities.css";
import { Card } from "../components/Card";

export const Universities = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.DataReducer.universities);

  useEffect(() => {
    dispatch(getuniversities());
  }, []);
  return (
    <div id="Universities">
      <h1>Universities</h1>
      <div id="universities-container">
        {data.map((university) => (
          <div key={university._id}>
            <Card item={university} />
          </div>
        ))}
      </div>
    </div>
  );
};
