import React from 'react'
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

	//we use this function to fetch the books data from the the BooksAPI.js
	componentDidMount() {
		//we fetch the books and put in the right shelf
		this.fetchBooks();
	}
	// define function to fetch the books
	fetchBooks = () => {
		BooksAPI.getAll().then(books => {
			//put the books in the right state/array
			this.setState({
				currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
				wantToRead: books.filter(book => book.shelf === 'wantToRead'),
				read: books.filter(book => book.shelf === 'read'),
			})
		})
	}


	render() {
		const {currentlyReading, wantToRead, read} = this.state;
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
              		//re-check that the books are in the right place
              		refetchBooks={this.fetchBooks}
              	/>
              	<Shelf 
              		title='Want to Read'
              		books={wantToRead}
              		refetchBooks={this.fetchBooks}
              	/> 
              	<Shelf 
              		title='Read'
              		books={read}
              		refetchBooks={this.fetchBooks}
              	/>               	              	         
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'/>
            </div>
          </div>
		)
	}
}