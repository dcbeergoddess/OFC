import React from "react";
import {Link, Route} from "react-router-dom";


function EventDetail(props){
  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>
      This page shows full event detail for the selected event which routed you here.
      This page will render the Event Detail component
      This page will have a comment collection component with comment each components rendered
      </p>

      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/EventDetail`} component={EventDetail} />
    </div>
  );
}

export default EventDetail;