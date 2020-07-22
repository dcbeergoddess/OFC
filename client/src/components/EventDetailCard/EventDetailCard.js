import React  from "react";
import {Link} from "react-router-dom";
import "./EventDetail.css";
// import API from '../../utils/API';


function EventDetails(props) { 
        return (
        
            <div className="card">
                <h2 className="name">{props.title}</h2>
                <img src={props.image}
                    alt={props.title} />
                    <h3 >{props.date}</h3>
                    <h3 >{props.time}</h3>
                    <h3 >{props.location}</h3>
                    <button className="btn btn-dark">Delete Event</button>
                    <Link to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">
                        Add Comment
                    </Link>

                 <Link  to={`/EventMain`} >
                </Link>
            </div>
        )
    }

export default EventDetails;