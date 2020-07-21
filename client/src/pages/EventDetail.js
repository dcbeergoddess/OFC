import React, {useState, useEffect} from "react";
import {Link, Route, useParams} from "react-router-dom";
import EventDetails from '../components/EventDetailCard/EventDetailCard'
import API from "../utils/API"

function EventDetail(props){

 /* 

    const {event} = useParams()
  const [eventData, setEventData] = useState({
  })
  useEffect(() => {
    getEventDetail = (event) => {
      API.getEvent(this.props.id)
      .then(results => {
          console.log(results.data)
      }) 
  }
  }, [])
  */

  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1> Community Page</h1>
          </div>
        </div>
        <div>
        <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>
        </div>
      </div>
      <EventDetails
        // key={this.event._id}
        // title={this.event.title}
        // image={this.event.imageUrl}
        // date={this.event.when}
        // time={this.event.when}
        // location={this.event.location}
        // description={this.event.description}
        // isAuthenticated={this.props.isAuthenticated}
        // user={this.props.user}
        // id={this.event._id}
      />

      <Route exact path={`${props.match.url}/api/event/${props._id}`} component={EventDetail} />
    </>
  );
}

export default EventDetail;