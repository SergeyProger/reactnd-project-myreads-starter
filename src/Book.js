import React, { Component } from 'react'

class Book extends Component {

  state = {
    info: this.props.info
  };

  changeShelf = (event) => {
    const shelf = event.target.value;

    this.setState((previousState) => ({
      info: {
        ...previousState.info,
        shelf: shelf
      }
    }));

    this.props.updateBookShelf(this.state.info, shelf);
  };

  render() {
    const info = this.state.info;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${info.imageLinks.thumbnail})`
          }}></div>
          <div className="book-shelf-changer">
            <select value={info.shelf || 'none'} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{info.title}</div>
        <div className="book-authors">{info.authors && info.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book