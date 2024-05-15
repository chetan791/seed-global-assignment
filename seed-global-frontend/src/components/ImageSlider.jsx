import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

export const ImageSlider = () => {
  const arr = [
    {
      url: "https://www.seedglobaleducation.com/wp-content/uploads/2023/06/b2b-home-2-location_result-1.webp",
      text: "Amplifying outreach to attract high quality candidates from emerging markets",
      url2: "https://www.seedglobaleducation.com/wp-content/uploads/2023/06/Vector-Smart-Object1-3.png",
    },
    {
      url: "https://www.seedglobaleducation.com/wp-content/uploads/2023/06/b2b-home-3-contact_result-1.webp",
      text: "Connect. Engage. Recruit.",
      url2: "https://www.seedglobaleducation.com/wp-content/uploads/2023/06/Vector-Smart-Object1-4.png",
    },
    {
      url: "https://www.seedglobaleducation.com/wp-content/uploads/2023/06/b2b-home-1_result-1.webp",
      text: "Empowering universities to stand out on the global stage",
      url2: "https://www.seedglobaleducation.com/wp-content/uploads/2023/03/Vector_Smart_Object1.png",
    },
  ];
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    backgroundsize: "cover",
    backgroundposition: "center",
    color: "#fff",
    padding: "20px 5%",
  };

  return (
    <div className="slider-container">
      <Slide>
        {arr.map((obj, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${obj.url})` }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <h1 style={{ fontSize: "40px" }}>{obj.text}</h1>
                <button
                  style={{
                    backgroundColor: "#0d8097",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{
                    width: "70%",
                    marginTop: "350px",
                    marginLeft: "100px",
                  }}
                  src={obj.url2}
                  alt="img2"
                />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
