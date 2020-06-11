import React from "react";
import {Link, Route} from "react-router-dom";
import AddEventForm from "../components/AddEventForm"


function AddEvent(props){
  return (
    <div>
      <h1>Add Event Form Page</h1>

    

      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddEvent`} component={AddEvent} />
      <AddEventForm/>
    </div>
  );
}

export default AddEvent;