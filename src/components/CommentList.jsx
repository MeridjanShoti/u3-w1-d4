import { Component } from "react";
import Delete from "./Delete";
class CommentList extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <div key={`comment-${comment._id}`}>
        <p>{comment.author}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p>{comment.comment}</p>
          <Delete asin={comment._id} />
        </div>

        <hr />
      </div>
    ));
  }
}

export default CommentList;
