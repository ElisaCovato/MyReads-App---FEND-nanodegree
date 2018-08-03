import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf'
import * as  BooksAPI from '../BooksAPI.js'

export default class BookShelfMain extends Component {
	//the states of the bookshelves
	//the arrays will be filled onece we get the books 
	//from BooksAPI
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: [],
	}


/*	// define function to fetch the books
	fetchBooks = () => {
		BooksAPI.getAll().then(books => {
			//put the books in the right state/array
			this.setState({
				currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
				wantToRead: books.filter(book => book.shelf === 'wantToRead'),
				read: books.filter(book => book.shelf === 'read'),
			})
		})
	}*/

	sortBooks(books) {
		return {
				currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
				wantToRead: books.filter(book => book.shelf === 'wantToRead'),
				read: books.filter(book => book.shelf === 'read'),
			};
	}

	render() {
		const {books, moveTo} = this.props;
		const {currentlyReading, wantToRead, read} = this.sortBooks(books);
		//returns the 3 shelves of books
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	<Shelf 
              		title='Currently Reading'
              		books={currentlyReading}
              		moveTo={moveTo}
              	/>
              	<Shelf 
              		title='Want to Read'
              		books={wantToRead}
              		moveTo={moveTo}
              	/> 
              	<Shelf 
              		title='Read'
              		books={read}
              		moveTo={moveTo}
              	/>               	              	         
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'/>
            </div>
          </div>
		);
	}
}


BookShelfMain.proptypes = {
  books: PropTypes.object,
  moveTo: PropTypes.func,
}