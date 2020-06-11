import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import "../index.css";


class EventCard extends React.Component {
    render() {
        return (
            <div class="container">
                <header class="jumbotron">
                        <h1> Get Involved!!</h1>
                        <p> Browse events or leave comments on existing events</p>
                </header>

                <div class="row">
                    <div class="col-lg-12">
                        <h3>Members have added the following events </h3>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-3 col-sm-6">
                        <div class="thumbnail">
                            <div className="card">
                                <h2 className="name">{this.props.title}</h2>
                                <img src={this.props.image}
                                    alt={this.props.title} />
                                <h3 >{this.props.date}</h3>
                                <h3 >{this.props.time}</h3>
                                <h3 >{this.props.location}</h3>
                                <Link to="/EventDetail" role="button" className="btn btn-dark">See Details</Link>
                                <Link to={`/EventMain`} ></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default EventCard;