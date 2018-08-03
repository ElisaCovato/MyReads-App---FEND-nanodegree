import React from 'react'
import { Route } from 'react-router-dom'
import BookShelfMain from './BookShelfMain'
import SearchBar from './SearchBar'
import * as BooksAPI from '../BooksAPI'
import '../styles/App.css'

class BooksApp extends React.Component {
	state = {
		books: [],
	}

	//we use this function to fetch the books data from the the BooksAPI.js
	componentDidMount() {
		//we fetch the books and put in the right shelf
		this.fetchBooks();
	}

	fetchBooks() {
		BooksAPI.getAll().then(books => {
			this.setState({ books });
		});
	}

	  //this makes us to move books in different shelves
  moveTo(shelf, book) {
    // we update the status of the books
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
        	<SearchBar 
        	books={this.state.books}
        	moveTo={(shelf, book) => this.moveTo(shelf,book)}
        	/>
        	)} />
        <Route exact path="/" render={() => (
        	<BookShelfMain
        	books={this.state.books}
        	moveTo={(shelf, book) => this.moveTo(shelf,book)}
        	/>
        	)}  />
      </div>
    )
  }
}

export default BooksApp
