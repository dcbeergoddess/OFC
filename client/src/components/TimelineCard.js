import React from "react";
import "./TimelineCard.css";

function TimelineCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h6>{props.date}</h6>
      <div className="img-container">
        <img 
        alt={props.title}
        src={props.image}
         />
      </div>
      <div className="content">
        <h6>{props.text}</h6>
      </div>
    </div>
  );
}

export default TimelineCard;