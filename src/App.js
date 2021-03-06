import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      });
    });
  };

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search booksOnShelves={books} updateBookShelf={this.updateBookShelf} />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" books={books} filter_category="currentlyReading" updateBookShelf={this.updateBookShelf} />
                <Shelf title="Want to Read" books={books} filter_category="wantToRead" updateBookShelf={this.updateBookShelf} />
                <Shelf title="Read" books={books} filter_category="read" updateBookShelf={this.updateBookShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
