import React from "react";
import { Link, Route } from "react-router-dom";
import AddEventForm from "../components/AddEventForm/AddEventForm";
import "./Home/Home.css";

function AddEvent(props) {
  return (
    <div>
      <Link to="/EventMain" role="button" className="btn btn-link" style={{color: "ivory", fontSize: '2rem'}}>
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddEvent`} render={props => <AddEvent {...props} user={props.user} isAuthenticated={props.isAuthenticated} />} />

      <AddEventForm user={props.user} isAuthenticated={props.isAuthenticated} setEventCount={props.setEventCount} showMessage={props.showMessage} errorMessage={props.errorMessage}/>
    </div>
  );
}

export default AddEvent;
