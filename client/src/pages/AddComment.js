import React from "react";
import {Link, Route} from "react-router-dom";


function AddComment(props){
  return (
    <div>
      <h1>ADD COMMENT FORM</h1>
      <p>
      Add Comment Component to be added
      </p>

      <Link to="/EventDetail" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddComment`} component={AddComment} />
    </div>
  );
}

export default AddComment;