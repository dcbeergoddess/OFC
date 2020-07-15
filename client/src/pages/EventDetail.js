import React from "react";
import {Link, Route} from "react-router-dom";
import {Flex} from "../components/Flex";
import EventDetails from '../components/EventDetailCard/EventDetailCard'
import eventsjson from "../events.json"

function EventDetail(props){
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1> Community Page</h1>
          </div>
        </div>
        <div>
        <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>
          <Link to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">
            Add Comment
      </Link>
        </div>
      </div>
      <EventDetails/>

      <Route exact path={`${props.match.url}/EventDetail`} component={EventDetail} />
    </div>
  );
}

export default EventDetail;