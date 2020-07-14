import React from "react";
// import { Link } from "react-router-dom";
import "./EventCard.css";
import "../../index.css";
import Moment from 'react-moment'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';


class EventCard extends React.Component {
    render() {
        return (
            <>
            {/* <style type="text/css">
                {`

                .li {
                    background: "#202020", color: "#FAFAD2"
                }

                `}
            </style> */}

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

            </Card>
                
                {/*  OLD CARD
            <Flex container width="100%" flexDirection="column" justifyContent="space-around" alignItems="center">
                <div className="card" style={{background: "#202020", color: "#FAFAD2", padding: "4rem", marginLeft: "16rem", marginRight:"16rem" }}>
                    <h1 className="name">{this.props.title}</h1>
                    <img src={this.props.image}
                        alt={this.props.title} />
                    <h6 > <strong>Event Date: </strong> 
                    <Moment format="MM/DD/YYYY">{this.props.date}</Moment>
                    </h6>
                    <h6 > <strong>Start Time: </strong>
                        <Moment format="h:mma">{this.props.date}</Moment>
                    </h6>
                    <h6 > <strong>Meetup Location:</strong> {this.props.location}</h6>
                    <h6><strong>Event Description: </strong>{this.props.description}</h6>
                </div>
            </Flex>
        */}

            </>
        )

    }

}


export default EventCard;