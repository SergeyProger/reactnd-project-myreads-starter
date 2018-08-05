import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    books: []
  };

  searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({
        books: books
      })
    });
  };

  updateQuery = (query) => {
    this.setState({
      query: query
    });

    this.searchBooks(query);
  };

  render() {
    const books = this.state.books;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) && books.map((book) => (
              <li key={book.id}><Book info={book} updateBookShelf={this.updateBookShelf} /></li>
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default Search