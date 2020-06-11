import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import "../index.css";


class EventCard extends React.Component {
    render() {
        return (
            <div class="row text-center">
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <div className="card">
                            <h2 className="name">{this.props.title}</h2>
                            <img src={this.props.image}
                                alt={this.props.title} />
                            <h6 >{this.props.date}</h6>
                            <h6 >{this.props.time}</h6>
                            <h6 >{this.props.location}</h6>
                            <Link to="/EventDetail" role="button" className="btn btn-dark">See Details</Link>
                            <Link to={`/EventMain`} ></Link>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}


export default EventCard;