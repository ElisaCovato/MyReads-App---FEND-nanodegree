import React from 'react'
import { Component } from 'react'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class Shelf extends Component {
  //this makes us to move books in different shelves
  moveTo = (e, book) => {
    const shelf = e.target.value;
    // we update the status of the books
    BooksAPI.update(book, shelf).then(() => {
      this.props.refetchBooks();
    });
  }
	//this show the shelf with the appropriate books on it
	render() {
		const{ title, books}=this.props;
		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map((book, index) => (
						<Book 
						key={index}
                    	authors={book.authors}
                    	thumbnail={book.imageLinks.thumbnail}
                    	title={book.title}
                      shelf={book.shelf}
                      moveTo={e=>this.moveTo(e,book)}
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
  refetchBooks: PropTypes.func,
}

export default Shelf;