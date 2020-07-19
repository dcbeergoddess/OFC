import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import "./AddCommentForm.css";
import API from "../../utils/API";


class AddCommentForm extends Component {
  constructor(props) {
    super(props)
  }
  // Setting the component's initial state
  state = {
    comment: "",
  };

  handleInputChange = event => {
  
    event.preventDefault()

    const {name, value} = event.target
    this.setState({[name]: value})

  };

  handleFormSubmit = event => {
  
    event.preventDefault();
    
    const newComment = {...this.state}

    newComment.forEvent = this.props.event._id
    newComment.postedBy = this.props.user._id

    API.addComment(newComment)
      .then(() => {
        this.setState({submitted:true})
      })
      .catch(console.error)

    this.setState({
        comment: "",
        user: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <>
      {/* {!this.props.isAuthenticated && <Redirect to="/" />}
      {this.state.submitted && <Redirect to="/EventMain" />} */}
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
            <Link onClick={this.handleFormSubmit} to="/AddComment" role="button" className="btn btn-lg btn-dark btn-block">Submit</Link>
                 <Link  to={`/AddComment`} ></Link>
        </form>
      </div>
      </>
    );
  }
}

export default AddCommentForm;
