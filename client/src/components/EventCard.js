import React from "react";
import { Link} from "react-router-dom";
import "./EventCard.css";


class EventCard extends React.Component {
    render() {
        return (<div className="card">
                <h2 className="name">{this.props.title}</h2>
                <img src={this.props.image}
                    alt={this.props.title} />
                    <h3 >{this.props.date}</h3>
                    <h3 >{this.props.time}</h3>
                    <h3 >{this.props.location}</h3>
                    <button className="btn btn-dark">See Details</button>

                 <Link  to={`/EventMain`} >
                </Link>
            </div>
        )
    }
}

export default EventCard;