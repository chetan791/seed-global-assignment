import React from "react";
import "../css/enrolled.css";
export const EnrolledCard = ({ element }) => {
  function getStatusColor(status) {
    switch (status) {
      case "pending":
        return "grey";
      case "accepted":
        return "green";
      case "rejected":
        return "red";
      default:
        return "transparent";
    }
  }
  const backgroundColor = getStatusColor(element.status);
  return (
    <div className="enrolled-card">
      <h3>name : {element.universityID.name}</h3>
      <h3>course : {element.course}</h3>
      <h3
        style={{
          backgroundColor: backgroundColor,
          padding: "5px",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        status : {element.status}
      </h3>
      <h3>date : {element.date}</h3>
    </div>
  );
};
