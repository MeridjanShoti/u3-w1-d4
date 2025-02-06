import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    review: { comment: "", rate: "1", elementId: this.props.asin },
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    alert("sono nel submit");
    console.log(this.state.review);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.review),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNmU2ZGI3NDcwMTAwMTU4YjJiOTgiLCJpYXQiOjE3Mzg4NDY2ODksImV4cCI6MTc0MDA1NjI4OX0.eAwJcN7qcyTpbjvhsgvtZk69pqPqTIMtlD_ewZKx4Ng",
        },
      });
      if (response.ok) {
        alert("commento creato correttamente");
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Star
                onClick={() => {
                  this.setState({ review: { ...this.state.review, rate: 1 } }, () => console.log(this.state.rate));
                }}
              />
              <Star
                onClick={() => {
                  this.setState({ review: { ...this.state.review, rate: 2 } }, () => console.log(this.state.rate));
                }}
              />
              <Star
                onClick={() => {
                  this.setState({ review: { ...this.state.review, rate: 3 } }, () => console.log(this.state.rate));
                }}
              />
              <Star
                onClick={() => {
                  this.setState({ review: { ...this.state.review, rate: 4 } }, () => console.log(this.state.rate));
                }}
              />
              <Star
                onClick={() => {
                  this.setState({ review: { ...this.state.review, rate: 5 } }, () => console.log(this.state.rate));
                }}
              />
            </Col>
          </Row>
          <label htmlFor="comment">Write a comment:</label>
          <textarea
            name="comment"
            id="comment"
            rows={2}
            onChange={(e) => this.setState({ review: { ...this.state.review, comment: e.target.value } })}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            submit comment
          </button>
        </form>
      </>
    );
  }
}
export default AddComment;
