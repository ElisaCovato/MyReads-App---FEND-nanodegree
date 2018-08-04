import React from 'react'
import { Component } from 'react'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class Shelf extends Component {
//this show the shelf with the appropriate books on it
	render() {
		const{ title, books, moveTo}=this.props;
		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
      				<Book 
    					  key={index}
                moveTo={moveTo}
                book = {book}
    					/>                    	
            ))}
          </ol>
        </div>
      </div>	
		)
	}
}

// We use proptypes to check that the props we 
// pass to our component are wanted data type
Shelf.proptypes = {
	title: PropTypes.string,
	books: PropTypes.array,
  moveTo: PropTypes.func,
}

export default Shelf;