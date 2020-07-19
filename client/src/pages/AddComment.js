import React from "react";
import {Link, Route} from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm/AddCommentForm";


function AddComment(props){
  return (
    <div>

      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddComment`} render={props =>
        <AddComment {...props}
          user={props.user}
          event={props.event}
          // isAuthenticated={props.isAuthenticated} 
          />
      } />
        <AddCommentForm
          user={props.user}
          event={props.event}
          // isAuthenticated={props.isAuthenticated}
          />
    </div>
  );
}

export default AddComment;