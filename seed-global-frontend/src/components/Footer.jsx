import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Events</li>
          <li>Scholarships</li>
          <li>Student Hub</li>
          <li>For Universities</li>
        </ul>
      </div>
      <div>
        <h3 style={{ color: "#f28e43" }}>Join The Community</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "25px",
          }}
        >
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <h3 style={{ color: "#0d8097" }}>
          Write to us at info@seedglobaleducation.com
        </h3>
        <h3>
          TERMS OF USE <br /> PRIVACY POLICY <br /> @2024 Seed Global Education
        </h3>
      </div>
    </div>
  );
};
