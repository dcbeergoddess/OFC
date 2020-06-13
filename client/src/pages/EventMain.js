import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";
import "../components/EventCard.css"

import API from '../utils/API'


class EventMain extends React.Component {

  state = {
    events: []
  }

  getEvents = () => {
    API.getAllEvents()
      .then(results => {
        this.setState({events: results.data.data})
      })
      .catch(console.error)
  }

  // componentDidMount = () => {
  //   this.getEvents()
  // }

  render = () => {
  return (
    <>
      {
        // workaround to ensure latest events are added after redirect
        (async () => await this.getEvents())() ? null : null
      }
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
  
        {/* {eventsjson.map(event => (
          <div className= "EventCard">
            <EventCard
              key={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              isAuthenticated={this.props.isAuthenticated}
              user={this.props.user}
            />
            </div>
        ))} */}

        {this.state.events.map(event => (
          <div className= "EventCard">
            <EventCard
              key={event._id}
              title={event.title}
              image={event.imageUrl}
              date={event.when}
              time={event.when}
              location={event.location}
              description={event.description}
              isAuthenticated={this.props.isAuthenticated}
              user={this.props.user}
            />
          </div>
        ))}

      <Route exact path={`${this.props.match.url}/EventMain`} component={EventMain} />
    </>
  );}
}

export default EventMain;