import React, { useEffect, useState } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import {Flex} from "../components/Flex";
import EventCard from "../components/EventCard/EventCard"
import "../components/EventCard/EventCard.css"
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

  deleteEvent = (eventId) => {
    API.deleteEvent(eventId).then(res => {
      console.log(res);
      const events = this.state.events.filter(
        event => event._id != eventId
        
      ) 
      this.setState({events: events})
    });
  };


  render = () => {
  return (
    <>
          {!this.props.isAuthenticated && <Redirect to="/" />}

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
      {/* Added flex here instead */}
      <Flex container width="100%" margin="auto" justifyContent="space-around">
        {this.state.events.map(event => (
          <div>
            <EventCard
              key={event._id}
              title={event.title}
              image={event.imageUrl}
              date={event.when}
              time={event.when}
              location={event.location}
              description={event.description}
              flagCount={event.flagCount}
              isAuthenticated={this.props.isAuthenticated}
              user={this.props.user}
              postedBy={event.postedBy}
              deleteEvent={this.deleteEvent}
              id={event._id}
            />
          </div>
        ))}

      <Route exact path={`${this.props.match.url}/EventMain`} component={EventMain} />
      </Flex>  
    </>
  );}
}

export default EventMain;