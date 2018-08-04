import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => {
              return book.shelf === this.props.filter_category
            }).map((book) => (
              <li key={book.id}><Book info={book} onChangeShelf={this.props.onChangeShelf} /></li>
            ))}
          </ol>
        </div>
      </div>


    )
  }
}

export default Shelf