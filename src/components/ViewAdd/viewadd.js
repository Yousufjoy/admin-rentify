import React from "react";
import "./viewadd.css";

function viewadd({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="addid">
        <h5>AD ID : 2 </h5>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button className="btn1">
          <a href="">
            {" "}
            <h4>Approve </h4>{" "}
          </a>
        </button>
        <button className="btn2">
          <a href="">
            <h4>Reject</h4>{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default viewadd;
