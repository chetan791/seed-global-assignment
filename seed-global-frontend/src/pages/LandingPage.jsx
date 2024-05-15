import React from "react";
import "../css/LandingPage.css";
import { ImageSlider } from "../components/ImageSlider";
export const LandingPage = () => {
  return (
    <div>
      <ImageSlider />
      <div id="LandingPage-container">
        <div id="stats">
          <div>
            <span>50 +</span>
            <br />
            <span>Client Universities</span>
          </div>
          <div>
            <span>25 +</span>
            <br />
            <span>Years of International Student Recruitment Experience</span>
          </div>
          <div>
            <span>10 +</span>
            <br />
            <span>Countries</span>
          </div>
        </div>
        <div id="location">
          <div>
            <img
              src="https://www.seedglobaleducation.com/wp-content/uploads/2023/03/locationseed.jpg"
              alt=""
            />
          </div>
          <div>
            <p>
              Our leadership team brings nearly three decades of collective
              international higher education experience. We have helped
              universities from across the globe attract high calibre students
              as we understand key motivations for students to study abroad
            </p>
            <button className="blue-button">ABOUT US</button>
          </div>
        </div>
        <h1 style={{ fontSize: "45px", textAlign: "center" }}>SERVICES</h1>
        <div id="services">
          <div>
            <img
              src="https://www.seedglobaleducation.com/wp-content/uploads/2023/04/2-layers-4.png"
              alt="1"
            />
            <p>IN-COUNTRY REPRESENTATION</p>
            <button className="blue-button">READ MORE</button>
          </div>
          <div>
            <img
              src="https://www.seedglobaleducation.com/wp-content/uploads/2023/04/2-layers-5.png"
              alt=""
            />
            <p>PROGRAM MARKETING</p>
            <button className="blue-button">READ MORE</button>
          </div>
          <div>
            <img
              src="https://www.seedglobaleducation.com/wp-content/uploads/2023/04/2-layers-6.png"
              alt=""
            />
            <p>STUDENT RECRUITMENT EVENTS</p>
            <button className="blue-button">READ MORE</button>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            borderBottom: "2px solid grey",
            paddingBottom: "50px",
          }}
        >
          EXPLORE SERVICES
        </h1>
      </div>
    </div>
  );
};
