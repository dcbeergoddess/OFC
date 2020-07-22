import React, {useState, useEffect} from "react";
import {Link, Route, useParams} from "react-router-dom";
import EventDetails from '../components/EventDetailCard/EventDetailCard'
import API from "../utils/API"

function EventDetail(props){

  // const {event} = useParams()
  // const [eventData, setEventData] = useState({
  
  useEffect(() => {
    API.getEvent(props.id)
    .then(results => {
      const events = results.data.data
      this.setState({events: events})
    })
    .catch(console.error)
  }, [])


  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1> Community Page</h1>
          </div>
        </div>
        <div>
        <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>
        </div>
      </div>
        <div key={props._id} className="card">
                <h2 className="name">Test</h2>
                <img src="test"
                    alt="test" />
                    {/* <h3 >{props.date}</h3>
                    <h3 >{props.time}</h3>
                    <h3 >{props.location}</h3> */}
                    <button className="btn btn-dark">Delete Event</button>
                    <Link to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">
                        Add Comment
                    </Link>

                 <Link  to={`/EventMain`} >
                </Link>
                </div>
      <EventDetails
        // key={events._id}
        // title={events.title}
        // image={events.imageUrl}
        // date={events.when}
        // time={events.when}
        // location={events.location}
        // description={events.description}
        // isAuthenticated={props.isAuthenticated}
        // user={props.user}
        // id={events._id}
      />

      {/* <Route exact path={`${props.match.url}/api/event/${props._id}`} component={EventDetail} /> */}
    </>
  );
}

export default EventDetail;