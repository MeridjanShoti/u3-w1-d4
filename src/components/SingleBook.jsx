import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <Col>
        <Card className={this.state.selected === true ? "border border-danger" : ""}>
          <Card.Img
            variant="top"
            src={this.props.imgUrl}
            style={{ height: "300px", objectFit: "contain" }}
            onClick={() => {
              if (this.state.selected === false) {
                this.setState({
                  selected: true,
                });
              } else {
                this.setState({
                  selected: false,
                });
              }
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.bookTitle}</Card.Title>
            <Card.Text>{this.props.price} €</Card.Text>
            {this.state.selected && <CommentArea asin={this.props.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
