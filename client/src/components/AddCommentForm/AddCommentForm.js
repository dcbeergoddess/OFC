import React, { Component } from "react";
// import {Link, Redirect} from "react-router-dom";
// import {useParams} from "react-router-dom";
import {Button} from 'react-bootstrap'
import "./AddCommentForm.css";
import API from "../../utils/API";


class AddCommentForm extends Component {

  // Setting the component's initial state
  state = {
    comment: "",
    
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
    
    const newComment = {...this.state}

    // newComment.forEvent = this.props.event._id
    newComment.postedBy = this.props.user._id

    API.addComment(newComment)
      .then(() => {
        this.setState({submitted:true})
      })
      .catch(console.error)

    this.setState({
        comment: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    // const { eventId } = this.props.match.params
    // const {event} = useParams()
    // console.log(eventId)
    console.log(this.props.user)
    console.log(this.props.event)
    return (
      <>
      {/* {!this.props.isAuthenticated && <Redirect to="/" />}
      {this.state.submitted && <Redirect to="/EventMain" />} */}
      <div >
        <form className="form">
          <input
            value={this.state.comment}
            name="comment"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add a Comment"
          />
            <Button onClick={this.handleFormSubmit} href={`/EventMain/`} className="btn btn-dark" style={{fontSize: "1rem" }}>Add Comment</Button>
                
        </form>
      </div>
      </>
    );
  }
}

export default AddCommentForm;
