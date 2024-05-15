import React from "react";
import { useLocation } from "react-router-dom";
import "../css/view.css";

export const ViewUniversityPage = ({ info }) => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div style={{ paddingTop: "100px" }} id="ViewUniversityPage">
      <div id="university-info">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg/1024px-University-of-Alabama-EngineeringResearchCenter-01.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Name : {item.name}</p>
          <p>Location : {item.address}</p>
          <p>Country : {item.country}</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam nihil dolores nesciunt omnis aliquam obcaecati porro
            impedit fugit voluptatum aliquid voluptas, ullam culpa sed iure
            aperiam odio quidem id laboriosam.
          </p>
        </div>
      </div>

      <h2>Course Offered</h2>
      <div id="course-container">
        {item.courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2 style={{ width: "max-content", margin: 0 }}>{course}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sunt cumque cum, inventore eos possimus, similique est
              quas perferendis voluptatem eius, animi laboriosam laborum
              necessitatibus quidem exercitationem qui distinctio ut.
            </p>
            <button className="blue-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};
