import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import {Flex} from "../components/Flex";
import EventCard from "../components/EventCard"
import eventsjson from "../events.json";
import "../components/EventCard.css"

import API from '../utils/API'


class EventMain extends React.Component {

  state = {
    events: [],
    refresh: false
  }

  getEvents = () => {
    API.getAllEvents()
      .then(results => {
        const events = results.data.data
        this.setState({events: events})
        this.props.setEventCount(events.length)
      })
      .catch(console.error)
  }

  componentDidMount() {
    this.getEvents()
  }


  render = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Get Involved</h1>
            <h3> Browse events or add a new event</h3>
          </div>
        </div>
        <div>
          {this.props.isAuthenticated ?
            <Link to="/AddEvent" role="button" className="btn btn-lg btn-dark btn-block">
              Add New Event
            </Link>
            :
            <></>
          }
        </div>
      </div>
        {this.state.events.map(event => (
          <div className= "EventCard" key={event._id}>
            <EventCard
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