import React from "react";
import { Link, Route } from "react-router-dom";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";
import EventCardWrapper from "../components/EventCardWrapper"



function EventMain(props) {
  return (
    <>

      <div class="container">
        <header class="jumbotron">
          <h1> Get Involved Now</h1>
          <p> Browse events or leave comments on existing events</p>
        </header>
        <div class="row">
          <div class="col-lg-12">
            <h3>Members have added the following events </h3>
          </div>
        </div>
        <div>
          <Link to="/AddEvent" role="button" className="btn btn-lg btn-dark btn-block">
            Add New Event
      </Link>
        </div>
      </div>

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

          </div>
        ))}
      </div>

      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
    </>
  );
}

export default EventMain;