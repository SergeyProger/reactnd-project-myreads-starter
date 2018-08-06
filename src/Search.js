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
    if(query.length > 0) {
      BooksAPI.search(query).then((books) => {
        this.setState({
          books: this.setShelfAttributes(books)
        })
      });
    }
  };

  updateQuery = (query) => {
    this.setState({
      query: query
    });

    this.searchBooks(query);
  };

  updateBookShelf = (book, shelf) => {
    this.props.updateBookShelf(book, shelf);
  };

  setShelfAttributes(books_in_search) {
    /* The BooksAPI.search returns books without shelf attributes.
     * This function parses through the books coming back from the
     * BooksAPI and if the same book is found on one of the shelves 
     * it replaces it.
     */
    const books_on_shelves = this.props.booksOnShelves;
    const books_in_search_with_shelf_attributes = [];

    books_in_search && books_in_search.length > 0 && books_in_search.forEach((book_in_search) => {
      const matching_book_on_shelves = books_on_shelves.find(book_in_shelf => book_in_shelf.id === book_in_search.id);
      books_in_search_with_shelf_attributes.push(matching_book_on_shelves || book_in_search);
    });

    return(books_in_search_with_shelf_attributes);
  }

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
            {Array.isArray(books) && books.length > 0 && books.map((book) => (
              <li key={book.id}><Book info={book} updateBookShelf={this.updateBookShelf} /></li>
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default Search