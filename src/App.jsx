import "./App.css";
import fantasy from "./assets/books/fantasy.json";
import history from "./assets/books/history.json";
import horror from "./assets/books/horror.json";
import romance from "./assets/books/romance.json";
import scifi from "./assets/books/fantasy.json";
import MyBookshop from "./components/MyBookshop";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import { Component } from "react";
let genres = ["Fantasy", "History", "Horror", "Romance", "SciFi"];
class App extends Component {
  state = {
    selectedGenre: fantasy,
  };
  render() {
    return (
      <>
        <MyNav />
        <div className="container">
          <MyBookshop />
          <label htmlFor="genre">Select Genre</label>
          <select
            name="genre"
            id="genre"
            className="mx-2"
            onChange={(e) => {
              console.log(e.target.value);
              let sGenre;
              switch (e.target.value) {
                case "fantasy":
                  sGenre = fantasy;
                  break;
                case "history":
                  sGenre = history;
                  break;
                case "horror":
                  sGenre = horror;
                  break;
                case "romance":
                  sGenre = romance;
                  break;
                case "sciFi":
                  sGenre = scifi;
                  break;
                default:
                  sGenre = fantasy;
              }

              this.setState({ selectedGenre: sGenre });
            }}
          >
            {genres.map((genre, index) => (
              <option value={genre.toLowerCase()} key={`genre-${genre.toLowerCase + index}`}>
                {genre}
              </option>
            ))}
          </select>
          <BookList genre={this.state.selectedGenre} />
        </div>
        <MyFooter />
      </>
    );
  }
}

export default App;
