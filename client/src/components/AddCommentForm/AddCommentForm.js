import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./AddCommentForm.css";


class AddCommentForm extends Component {
  // Setting the component's initial state
  state = {
    comment: "",
    user: "{.this.state.username}"
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change

    // Updating the input's state

  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  

    this.setState({
        comment: "",
        user: "{.this.state.username}"
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div >
        <h1>Add Comment</h1>
        <form className="form">
          <input
            value={this.state.comment}
            name="comment"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add a Comment"
          />
          <input
            value={this.state.user}
            name="text"
            onChange={this.handleInputChange}
            type="text"
          />
         
            <Link onClick={this.handleFormSubmit} to="/EventDetail" role="button" className="btn btn-lg btn-dark btn-block">Submit</Link>
                 <Link  to={`/AddEvent`} ></Link>
        </form>
      </div>
    );
  }
}

export default AddCommentForm;
