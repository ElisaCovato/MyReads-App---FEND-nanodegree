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

    //this function handles the search and associate to each result an appropriate shelf
  searchFor(query)  {

     return BooksAPI.search(query).then(results => results && !results.error ? results : []).then((results) => {
          return results.map(book => {
            const shelvedBookIndex = this.state.books.findIndex(shelvedBook => shelvedBook.id===book.id)
            var shelf;
            if (shelvedBookIndex === -1) {
              shelf = 'none';
            } else shelf = this.state.books[shelvedBookIndex].shelf;
            return Object.assign({shelf}, book);
          }) }
        )

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
          searchFor = { (query) => this.searchFor(query)}
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

export default BooksApp;
