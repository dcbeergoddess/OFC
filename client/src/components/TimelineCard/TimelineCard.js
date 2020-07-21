import React from "react";
import "./TimelineCard.css";
import "../../index.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function TimelineCard(props) {
  return (
    <Card style={{ width: "20rem", background: "#202020", color: "#FAFAD2" }}>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body style={{ margin: "1px", padding: "1px", position: "relative" }}>
        <Card.Title style={{fontWeight:"bolder", fontFamily: "'Anton', sans-serif", fontSize: "1.5rem", color:"#CD4545"}}>{props.title}</Card.Title>
        <ListGroup style={{ background: "#202020", color: "#FAFAD2", margin: "0px" }} className="list-group-flush">
          <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>{props.date}</ListGroupItem>
          <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>{props.text}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TimelineCard;
