import React from "react";

function TimelineCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <div className="img-container">
        <img 
        alt={props.title}
        src={props.image}
         />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.text}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TimelineCard;