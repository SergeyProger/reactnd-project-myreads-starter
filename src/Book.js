import React, { Component } from 'react'

class Book extends Component {

  state = {
    info: this.props.info
  };

  changeShelf = (event) => {
    const new_shelf = event.target.value;
    const info = this.state.info;
    if(new_shelf === 'none') {
      delete info.shelf;
    } else {
      info.shelf = new_shelf;
    }

    this.setState(() => ({
      info: info
    }));

    this.props.updateBook(this.props.info);
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${this.state.info.imageLinks.thumbnail})`
          }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.info.shelf} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.info.title}</div>
        <div className="book-authors">{this.state.info.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book