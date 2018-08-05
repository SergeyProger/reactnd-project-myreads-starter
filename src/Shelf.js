import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    const books = this.props.books.filter((book) => {
      return book.shelf === this.props.filter_category
    });

    return (
      books.length > 0 && (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}><Book info={book} updateBook={this.props.updateBook} /></li>
              ))}
            </ol>
          </div>
        </div>
      )
    )
  }
}

export default Shelf