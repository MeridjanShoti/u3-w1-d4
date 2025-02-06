import { Component } from "react";
import Delete from "./Delete";
class CommentList extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <>
        <p key={comment._id}>{comment.comment}</p>
        <Delete asin={comment._id} />
        <hr />
      </>
    ));
  }
}

export default CommentList;
