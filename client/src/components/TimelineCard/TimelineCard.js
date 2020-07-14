import React from "react";
import "./TimelineCard.css";
import "../../index.css";
import Moment from 'react-moment'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';


function TimelineCard(props) {
  return (
//     <div className="card"style={{background: "#202020", color: "#FAFAD2"}}>
//       <h2>{props.title}</h2>
//       <h6>{props.date}</h6>
//       <div className="img-container">
//         <img 
//         alt={props.title}
//         src={props.image}
//          />
//       </div>
//       <div className="content">
//         <h6>{props.text}</h6>
//       </div>
//     </div>
//   );
// }

// class TimelineCard extends React.Component {
//   render() {
//       return (
         <>
            <Card style={{ width: '50rem', background: "#202020", color: "#FAFAD2" }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src={props.image} alt={props.title} />
                <ListGroup style={{ background: "#202020", color: "#FAFAD2" }} className="list-group-flush">
                    <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>
                      {props.date}</ListGroupItem>
                    <ListGroupItem>{props.text}</ListGroupItem>
                </ListGroup>

              </Card>
              
          </>
        )

    };

export default TimelineCard;