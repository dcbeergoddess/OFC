import React from "react";
import {Link, Route} from "react-router-dom";
import AddEventForm from "../components/AddEventForm"


function AddEvent(props){
  return (
    <div>
  
      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddEvent`} render={props =>
          <AddEvent {...props}
            user={props.user}
            isAuthenticated={props.isAuthenticated} />
        } />
      <AddEventForm
        user={props.user}
        isAuthenticated={props.isAuthenticated} />
    </div>
  );
}

export default AddEvent;