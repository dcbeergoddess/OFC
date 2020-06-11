import React from "react";
import {Link, Route} from "react-router-dom";
// import {Flex} from './src/components/Flex.js'
import EventCard from "../components/EventCard"
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
          <Link to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">
            Add Comment
      </Link>
        </div>
      </div>
      <div>
      {eventsjson.map(event => (
          <EventCard 
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          time={event.time}
          location={event.location}
          />

      ))}
      </div>

      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/EventDetail`} component={EventDetail} />
    </div>
  );
}

export default EventDetail;