import React from "react";
import {Link, Route} from "react-router-dom";


function EventMain(props){
  return (
    <div>
      <Link to="/AddEvent" role="button" className="btn btn-link">
        Add New Event
      </Link>


      <h1>Event Main Page</h1>
      <p>
      This page will display card components - which when clicked will take you to the Event Detail
      </p>

      

      <Link to="/" role="button" className="btn btn-link">
        Go Back
      </Link>
    
      <Link to="/EventDetail" role="button" className="btn btn-link">
        EventDetail
      </Link>

      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
    </div>
  );
}

export default EventMain;