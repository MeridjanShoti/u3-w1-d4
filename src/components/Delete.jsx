import { Component } from "react";
import { Trash3 } from "react-bootstrap-icons";

class Delete extends Component {
  handleDelete = async () => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNmU2ZGI3NDcwMTAwMTU4YjJiOTgiLCJpYXQiOjE3Mzg4NDY2ODksImV4cCI6MTc0MDA1NjI4OX0.eAwJcN7qcyTpbjvhsgvtZk69pqPqTIMtlD_ewZKx4Ng",
      },
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleDelete}>
          <Trash3 />
        </button>
      </>
    );
  }
}
export default Delete;
