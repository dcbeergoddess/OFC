import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import "../../index.css";
import CommentCard from "../CommentCard/CommentCard";
// import FlagEvent from "../FlagEvent/FlagEvent";
import Moment from "react-moment";
import { Card, Button, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import API from "../../utils/API";
import AddCommentForm from "../AddCommentForm/AddCommentForm";

class EventCard extends React.Component {
  state = { flagCount: this.props.flagCount };

  getEventDetail = () => {
    API.getEvent(this.props.id).then(results => {
      console.log(results);
    });
  };

  componentDidMount() {
    this.getEventDetail();
  }

  handleFlagClick = e => {
    e.preventDefault();
    API.incrementEventFlag(this.props.id).then(res => {
      console.log(res.data);
      this.setState({ flagCount: res.data.data });
    });
  };

  handleDelete = event => {
    event.preventDefault();
    this.props.deleteEvent(this.props.id);
  };

  render() {
    return (
      <Card style={{ width: "20rem", background: "#202020", color: "#FAFAD2" }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bolder", fontFamily: "'Anton', sans-serif", fontSize: "1.5rem", color: "#CD4545" }}>{this.props.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={this.props.image} alt={this.props.title} />
        <ListGroup>
          <ListGroupItem header="Heading 3" style={{ background: "#202020", color: "#FAFAD2" }}>
            <strong>Event Date: </strong>
            <Moment format="MM/DD/YYYY">{this.props.date}</Moment>
          </ListGroupItem>
          <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>
            <strong>Start Time: </strong>
            <Moment format="h:mma">{this.props.date}</Moment>
          </ListGroupItem>
          <ListGroupItem style={{ background: "#202020", color: "#FAFAD2", border: "none" }}>
            <strong>Meetup Location: </strong>
            {this.props.location}
          </ListGroupItem>
          <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>
            <strong>Event Description: </strong>
            {this.props.description}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="btnEvent">
          <Button className="btn" style={{ margin: "10px", fontSize: "16px", backgroundColor: "#FAFAD2", color: "#202020" }} onClick={this.handleFlagClick}>
            <span role="img" aria-label="flag">
              {" "}
              🚩
            </span>{" "}
            Report Event: {this.state.flagCount}
          </Button>
          <br></br>
          {/* <Link to={`/event/${this.props.id}`} role="button" className="btn btn-dark btn-block" style={{ margin: "10px", fontSize: "16px" }}>
            See Event Details
          </Link> */}
          {this.props.postedBy._id === this.props.user._id && (
            <Button className="btn btn-dark btnEvent" style={{ margin: "10px", fontSize: "16px" }} onClick={event => this.handleDelete(event)}>
              Delete Event
            </Button>
          )}
          {/* <AddCommentForm
            user={this.props.user}
            event={this.eventId}
            // isAuthenticated={props.isAuthenticated}
          />
          <Link to={`/AddComment/${this.props.id}`} role="button" className="btn btn-sm btn-dark btnEvent" style={{ margin: "10px", fontSize: "16px" }}>
            Add Comment
          </Link> */}
        </Card.Body>
        {/* <Accordion>
          <Card style={{ width: "19rem", background: "#202020", color: "#FAFAD2", position: "center" }}>
            <Card.Body>
              <Accordion.Toggle as={Button} className="style-link" variant="link" eventKey="0" style={{ fontSize: "16px", border: "none", textDecoration: "none" }}>
                Show/Hide Comments
              </Accordion.Toggle>
            </Card.Body>
            <Accordion.Collapse eventKey="0">
              <CommentCard user="bob" comment="test" />
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </Card>
    );
  }
}
export default EventCard;
