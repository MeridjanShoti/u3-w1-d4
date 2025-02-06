import { Component } from "react";
class CommentList extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <>
        <p key={comment._id}>{comment.comment}</p>
        <hr />
      </>
    ));
  }
}

export default CommentList;
