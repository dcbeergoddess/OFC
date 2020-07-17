import React from "react";
import { Link} from "react-router-dom";
import "./EventDetail.css";
import API from '../../utils/API';


class EventDetails extends React.Component {

    render() {
        return (
        
            <div className="card">
                <h2 className="name">{this.props.title}</h2>
                <img src={this.props.image}
                    alt={this.props.title} />
                    <h3 >{this.props.date}</h3>
                    <h3 >{this.props.time}</h3>
                    <h3 >{this.props.location}</h3>
                    <button className="btn btn-dark">Delete Event</button>
                    <Link to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">
                        Add Comment
                    </Link>

                 <Link  to={`/EventMain`} >
                </Link>
            </div>
        )
    }
}

export default EventDetails;