import React from "react";
import { Link, Route } from "react-router-dom";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";
import "../components/EventCard.css"


function EventMain(props) {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>Get Involved Today!! </h1>
            <h3> Browse events or leave comments on existing events</h3>
          </div>
        </div>
        <div>
          <Link to="/AddEvent" role="button" className="btn btn-lg btn-dark btn-block">
            Add New Event
      </Link>
        </div>
      </div>
  
        {eventsjson.map(event => (
          <div className= "EventCard">
            <EventCard
              key={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
            </div>
        ))}

      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
    </>
  );
}

export default EventMain;