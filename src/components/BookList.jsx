import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";
class BookList extends Component {
  state = { searchedWords: "" };
  render() {
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            let search = document.getElementById("search");
            this.setState({
              searchedWords: search.value,
            });
          }}
        >
          <label htmlFor="search">Cerca tra i libri</label>
          <input type="text" id="search" className="mx-2" />
          <button type="submit">Search</button>
        </Form>

        <Row id="bookRow" className="row-cols-2 row-cols-md-3 row-cols-lg-5 gy-5 mt-1">
          {this.props.genre
            .filter((search) => search.title.toLowerCase().includes(this.state.searchedWords))
            .map((book) => (
              <SingleBook
                asin={book.asin}
                key={`book-${book.asin}`}
                imgUrl={book.img}
                bookTitle={book.title}
                price={book.price}
                buttonTxt="Buy"
              />
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
