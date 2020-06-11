import React from "react";
import {Link, Route} from "react-router-dom";
// import {Flex} from './src/components/Flex.js'
import EventCard from "../components/EventCard"
import eventsjson from "../events.json"

function EventDetail(props){
  return (
    <div>
        <Link to="/AddComment" role="button" className="btn btn-link">
        ADD COMMENT
      </Link>
      <h1>Event Detail Page</h1>
      
      <p>
      This page shows full event detail for the selected event which routed you here.
      This page will render the Event Detail component
      This page will have a comment collection component with comment each components rendered
      </p>

      <h1>Event Details</h1>
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