import React from "react";
import {Link, Route} from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm/AddCommentForm";


function AddComment(props){
  return (
    <div>


      <Link to="/EventDetail" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddComment`} component={AddComment} />
      <AddCommentForm/>
    </div>
  );
}

export default AddComment;