import React from "react";
import { Link } from "react-router-dom";
import {Flex} from "../components/Flex";
import "./EventCard.css";
import "../index.css";


class EventCard extends React.Component {
    render() {
        return (

            <Flex container width="100%" justifyContent="space-around">
                <div className="card">
                    <h1 className="name">{this.props.title}</h1>
                    <img src={this.props.image}
                        alt={this.props.title} />
                    <h6 > <strong>Event Date: </strong>{this.props.date}</h6>
                    <h6 > <strong>Start Time: </strong>{this.props.time}</h6>
                    <h6 > <strong>Meetup Location:</strong> {this.props.location}</h6>
                    <h6><strong>Event Description: </strong>{this.props.description}</h6>
                </div>
            </Flex>
        )

    }

}


export default EventCard;