import React from "react";
import {Link, Route} from "react-router-dom";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";


function EventMain(props){
  return (
   <>
      <Link to="/AddEvent" role="button" className="btn btn-link">
        Add New Event
      </Link>

      <h1>Event Main Page</h1>
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

      <Link to="/" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Link to="/EventDetail" role="button" className="btn btn-link">
        EventDetail
      </Link>
      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
</>
  );
}

export default EventMain;