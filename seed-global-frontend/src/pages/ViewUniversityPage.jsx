import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/view.css";
import { useDispatch, useSelector } from "react-redux";
import { applyForUniversity } from "../redux/DataReducer/Action";

export const ViewUniversityPage = ({ info }) => {
  const { name, email, token } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();

  // to open modal
  const location = useLocation();
  const { item } = location.state;
  const [showmodal, setShowModal] = useState(false);
  const [enquiry, setEnquiry] = useState({
    name: name,
    email: email,
    message: "",
    universityID: item._id,
    course: "",
    token: token,
  });
  //   console.log(item);

  // scroll to top after clicking on apply
  useEffect(() => {
    if (showmodal) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [showmodal]);

  const handelApply = () => {
    dispatch(applyForUniversity(enquiry));
    setShowModal(false);
  };

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
            <button
              className="blue-button"
              onClick={() => {
                setEnquiry({
                  ...enquiry,
                  universityID: item._id,
                  course: course,
                });
                setShowModal(true);
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      <div id="modal" style={{ display: showmodal ? "flex" : "none" }}>
        <div>
          <i
            class="fa-solid fa-x"
            style={{ color: "white", textAlign: "right", cursor: "pointer" }}
            onClick={() => setShowModal(false)}
          ></i>
          <textarea
            placeholder="Message"
            onChange={(e) =>
              setEnquiry({ ...enquiry, message: e.target.value })
            }
          ></textarea>
          <button className="blue-button" onClick={handelApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
