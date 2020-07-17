import React from "react";
// import { Link } from "react-router-dom";
import ReactDom from 'react-dom';
import "./EventCard.css";
import "../../index.css";
import Comments from '../../pages/Comments'
import CommentCard from '../CommentCard/CommentCard'
import Moment from 'react-moment'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link, Route} from "react-router-dom";
import API from '../../utils/API';
import EventMain from '../../pages/EventMain'


class EventCard extends React.Component { 

    getEventDetail = (event) => {
        API.getEvent(this.props.id)
        .then(results => {
            console.log(results)
        }) 
    } 

    handleDelete = (event) => {
        event.preventDefault()
        API.deleteEvent(this.props.id)
        .then(res => {
            console.log(res)
            window.location.reload(false)
            
        })
    }

    componentDidMount() {
        this.getEventDetail()
      }  
    
    render() {
        return (
            <>
            <Card style={{ width: '30rem', background:"#202020", color: "#FAFAD2"}}>
                <Card.Body>
                    <Card.Title header="Heading 3">{this.props.title}</Card.Title>
                </Card.Body>
                    <Card.Img variant="top" src={this.props.image} alt={this.props.title} />
                <ListGroup>
                    <ListGroupItem header="Heading 3" style={{ background: "#202020", color: "#FAFAD2" }} >
                        <strong>Event Date: </strong>
                        <Moment format="MM/DD/YYYY">{this.props.date}</Moment>
                    </ListGroupItem>
                    <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }} >
                        <strong>Start Time: </strong>
                        <Moment format="h:mma">{this.props.date}</Moment>
                    </ListGroupItem>
                    <ListGroupItem style={{background: "#202020", color: "#FAFAD2", border:"none" }}>
                        <strong>Meetup Location: </strong> 
                        {this.props.location}</ListGroupItem>
                    <ListGroupItem style={{ background: "#202020", color: "#FAFAD2" }}>
                        <strong>Event Description: </strong>
                        {this.props.description}
                    </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {/* <Link to={`/EventDetail/${this.props.id}`} role="btn btn-dark">See Event Details</Link>  */}
                        <Button onClick={event => this.handleDelete(event) }>Delete Event</Button>
                        <Link to="/AddComment" role="button" className="btn btn-dark btn-block">
                        Add Comment
                        </Link>
                    </Card.Body> 
                     {/* <Link to={`${this.props.match.url}/comments`}  role="button" className="btn btn-link">
                        SHOW Comments
                    </Link>{" "}
                    <Link to={`${this.props.match.url}/comments`}  role="button" className="btn btn-link">
                        Hide Comments
                    </Link> */}
                    <CommentCard
                        user="bob"
                        comment="test"/>
            </Card>

            {/* <Route exact path={`${this.props.match.url}/comments`} component={Comments} /> */}
            </>
        )

    }

}
export default EventCard;