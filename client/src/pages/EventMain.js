import React from "react";
import {Link, Route} from "react-router-dom";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";
import EventCardWrapper from "../components/EventCardWrapper"



function EventMain(props){
  return (
   <>
      <Link to="/AddEvent" role="button" className="btn btn-link">
        Add New Event
      </Link>

      <Link to="/" role="button" className="btn btn-link">
        Go Back
      </Link>

      <div>
      {eventsjson.map(event => (
        <div>
          <EventCard 
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          time={event.time}
          location={event.location}
          />
          <EventCardWrapper/>
          </div>
      ))}
      </div>



      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
</>
  );
}

export default EventMain;