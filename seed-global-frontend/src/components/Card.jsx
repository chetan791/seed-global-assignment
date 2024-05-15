import React from "react";
import "../css/Card.css";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
          culpa.
        </p>
        <Link to="/view" state={{ item: item }}>
          <button
            style={{ padding: "10px 20px", border: "none" }}
            href="#"
            className="button"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};
