import React, { Component } from "react";
import {Link, Redirect } from "react-router-dom";
import "./EventCard.css";
import "./AddEventForm.css";

import API from '../utils/API'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import defaultImage from '../assets/images/BLM_StreetSign.png'


class AddEventForm extends Component {
  constructor(props) {
    super(props)
  }

  // Setting the component's initial state
  state = {
    title: "",
    imageUrl: "",
    date: "",
    time: "",
    location: "",
    description: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change

    event.preventDefault()

    const {name, value} = event.target
    this.setState({[name]: value})


    // Updating the input's state

  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  
    const newEvent = {...this.state}

    const
      date = moment(this.state.date, moment.HTML5_FMT.DATE),
      time = moment(this.state.time, moment.HTML5_FMT.TIME)

    newEvent.when = date.hour(time.hour()).minute(time.minute()).toDate()
    newEvent.postedBy = this.props.user._id

    if (!this.state.imageUrl) {
      newEvent.imageUrl = defaultImage
    }

    API.addEvent(newEvent)
      .then(() => {
        this.props.setEventCount(0)
        this.setState({submitted: true})
      })
      .catch(console.error)

    this.setState({
        title: "",
        imageUrl: "",
        date: "",
        time: "",
        location: "",
        description: ""
    })

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (<>
      {!this.props.isAuthenticated && <Redirect to="/" />}
      {this.state.submitted && <Redirect to="/EventMain" />}

      <div >
      <h1>Add Event</h1>
      <form className="form" onSubmit={this.handleFormSubmit}>
        <input
          value={this.state.title}
          name="title"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Event Title"
        />
        <input
          value={this.state.imageUrl}
          name="imageUrl"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          value={this.state.date}
          name="date"
          onChange={this.handleInputChange}
          type="date"
          placeholder="Event Date"
        />
        <label>Date</label>
        <div style={{justifyContent: "between"}}>
        <label>Time</label>
        <input
          value={this.state.time}
          name="time"
          onChange={this.handleInputChange}
          type="time"
          step={0}
          placeholder="Event Start Time"
        />

        </div>
                  <input
          value={this.state.location}
          name="location"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Event Meet Up Location"
        />
        <input
          value={this.state.description}
          name="description"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Event Description"
        />
          <Link onClick={this.handleFormSubmit} to="/AddEvent" role="button" className="btn btn-lg btn-dark btn-block">Submit</Link>
               <Link  to={`/AddEvent`} ></Link>
      </form>
    </div>

    </>);
  }
}

export default AddEventForm;
