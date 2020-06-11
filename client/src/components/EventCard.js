import React from "react";
import {Link} from "react-router-dom";
import "./EventCard.css";
import Flex from "./Flex";
import "../index.css";


class EventCard extends React.Component {
    render() {
        return (
        <div className="flex-container">
            <div className="row">
        <div className="card">
                <h2 className="name">{this.props.title}</h2>
                <img src={this.props.image}
                    alt={this.props.title} />
                    <h3 >{this.props.date}</h3>
                    <h3 >{this.props.time}</h3>
                    <h3 >{this.props.location}</h3>
                    <Link to="/EventDetail" role="button" className="btn btn-dark">See Details</Link>
                 <Link  to={`/EventMain`} ></Link>
                 </div>
            </div>
            </div>
        )
    }
}

export default EventCard;