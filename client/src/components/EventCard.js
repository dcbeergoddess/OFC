import React from "react";
import { Link } from "react-router-dom";
import {Flex} from "../components/Flex";
import "./EventCard.css";
import "../index.css";
import Moment from 'react-moment'


class EventCard extends React.Component {
    render() {
        return (

            <Flex container width="100%" flexDirection="column" justifyContent="space-around">
                <div className="card">
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
        )

    }

}


export default EventCard;