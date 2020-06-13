import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import "./EventCard.css";
import "./AddEventForm.css";

import API from '../utils/API'


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
    newEvent.when = new Date(`${newEvent.date} ${newEvent.time}`)
    newEvent.postedBy = this.props.user._id

    console.log(newEvent)

    API.addEvent(newEvent)
      .then(this.setState({submitted: true}))
      .catch(console.error)

    this.setState({
        title: "",
        imageUrl: "",
        date: "",
        time: "",
        location: "",
        description: ""
    });
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
          type="text"
          placeholder="Event Date"
        />
                  <input
          value={this.state.time}
          name="time"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Event Start Time"
        />
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
