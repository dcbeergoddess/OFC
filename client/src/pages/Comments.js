import React from "react";
import CommentCard from '../components/CommentCard/CommentCard'

function Comments(props) {
  return (
    <div>
      {this.state.comment.map(comment => (
      <CommentCard
        key={comment._id}
        user={comment.postedBy}
        comment={comment.comment}
       />
      ))};
    </div>
  );
}

export default Comments;