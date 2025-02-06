import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNmU2ZGI3NDcwMTAwMTU4YjJiOTgiLCJpYXQiOjE3Mzg4NDY2ODksImV4cCI6MTc0MDA1NjI4OX0.eAwJcN7qcyTpbjvhsgvtZk69pqPqTIMtlD_ewZKx4Ng",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    } finally {
      console.log("codice asin: " + this.props.asin);
    }
  };
  render() {
    return (
      <>
        <CommentList comments={this.state.comments} />
        <AddComment comments={this.state.comments} asin={this.props.asin} />
      </>
    );
  }
}
export default CommentArea;
